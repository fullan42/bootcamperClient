// CarouselWithContent.js
"use client";
import React from "react";
import { Carousel } from "@material-tailwind/react";
import CarouselItem from "./CarouselItem";
import Provider from "../entity/provider";

const provider1 = new Provider(
  "The Beauty of Nature",
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
);

const provider2 = new Provider(
  "The Beauty of Nature",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
);

const provider3 = new Provider(
  "The Beauty of Nature",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  "It is not so much for its beauty that the forest makes a claim upon men's hearts, as for that subtle something, that quality of air that emanation from old trees, that so wonderfully changes and renews a weary spirit."
);

const providers = [provider1, provider2, provider3]; // providers dizisini tanımla

export function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl">
      {providers.map((provider, index) => (
        <CarouselItem
          key={index}
          imageSrc={provider.imageSrc}
          title={provider.title}
          description={provider.description}
        />
      ))}
    </Carousel>
  );
}
