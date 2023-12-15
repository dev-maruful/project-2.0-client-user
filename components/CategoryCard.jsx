"use client";
import { Card } from "keep-react";
import { PencilCircle } from "phosphor-react";
const CategoryCard = () => {
  return (
    <Card className="md:p-6 p-5 max-w-[320px] shadow-sm">
      <Card.Container className="flex items-center justify-center">
        <PencilCircle size={80} color="#1B4DFF" />
      </Card.Container>
      <Card.Container className="text-center">
        <Card.Title>Keep React</Card.Title>
        <Card.Description>Lorem Ipsum is simply dummy text</Card.Description>
      </Card.Container>
    </Card>
  );
};

export default CategoryCard;
