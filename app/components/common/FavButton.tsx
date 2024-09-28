'use client';

import { Button } from "@/components/ui/button";
import { useFavModal } from "@/src/hooks/use-fav-modal";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";



export const FavButton = () => {
  const { open } = useFavModal();

  return (
    <Button variant="ghost" onClick={open} className="cursor-pointer">
    <FavoriteBorderIcon/>
    </Button>
  );
};