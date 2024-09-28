'use client';

import { Button } from "@/components/ui/button";
import { useCartModal } from "@/src/hooks/use-cart-modal";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";



export const CartButton = () => {
  const { open } = useCartModal();

  return (
    <Button variant="ghost" onClick={open} className="cursor-pointer">
        <ShoppingBasketOutlinedIcon/>
        </Button>
  );
};