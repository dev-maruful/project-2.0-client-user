"use client";
import { Badge, Card, Button } from "keep-react";
import { Heart, ShoppingCart } from "phosphor-react";

export const ProductCard = () => {
  return (
    <>
      <Card
        className="max-w-xs overflow-hidden rounded-md shadow-sm"
        imgSrc="https://images.prismic.io/staticmania/45ce2799-f29b-462f-a795-5d3d5d10c9ad_product-1.avif?auto=compress,format"
        imgSize="md"
      >
        <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50 hover:bg-metal-50/60">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="absolute right-16 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50 hover:bg-metal-50/60">
          <ShoppingCart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
            <Badge size="xs" colorType="light" color="info">
              New
            </Badge>
          </Card.Container>
          <Card.Container className="my-3 ">
            <Card.Title>Men Nike Shoe</Card.Title>
            <Card.Description>
              Solitine Thunder SE DT 1201 2.0-Channel Wooden
            </Card.Description>
            <h2 className="mt-4 text-lg font-semibold">৳ 125,000</h2>
          </Card.Container>
          <Card.Container>
            <Button size="sm" type="outlinePrimary" className="w-full">
              View Details
            </Button>
            {/* <Button>View Details</Button> */}
          </Card.Container>
        </Card.Container>
      </Card>
    </>
  );
};
