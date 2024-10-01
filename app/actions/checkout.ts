'use server';

import { headers } from 'next/headers';

import type { Stripe } from 'stripe';


import { stripe } from '@/lib/srtipe';
import { formatAmountForStripe } from '@/src/utils/stripe/helpers';
import { CURRENCY } from '@/src/config';


export async function createCheckoutSession(
  amount: number
): Promise<{ client_secret: string | null; url: string | null }> {
  const origin: string = headers().get('origin') as string;

  const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
    mode: 'payment',
    submit_type: 'pay',
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: CURRENCY,
          product_data: {
            name: 'Amount',
          },
          unit_amount: formatAmountForStripe(amount, CURRENCY),
        },
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cancel`,
    ui_mode: 'hosted',
  });

  return {
    client_secret: checkoutSession.client_secret,
    url: checkoutSession.url,
  };
}

export async function createPaymentIntent(data: FormData): Promise<{ client_secret: string }> {
  const paymentIntent: Stripe.PaymentIntent = await stripe.paymentIntents.create({
    amount: formatAmountForStripe(Number(data.get('customDonation') as string), CURRENCY),
    automatic_payment_methods: { enabled: true },
    currency: CURRENCY,
  });

  return { client_secret: paymentIntent.client_secret as string };
}