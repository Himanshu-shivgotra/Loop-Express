"use client";

import { Carousel } from "flowbite-react";
import Container from "../../CommonComponents/Container";

export function CarouselComponent() {
    const imgArr = [
        {
            key: 1,
            imgUrl: "https://images4.alphacoders.com/112/thumb-1920-1128335.jpg"
        },
        {
            key: 2,
            imgUrl: "https://images4.alphacoders.com/112/thumb-1920-1128335.jpg"
        },
        {
            key: 3,
            imgUrl: "https://images4.alphacoders.com/112/thumb-1920-1128335.jpg",
        },
        {
            key: 4,
            imgUrl: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            key: 5,
            imgUrl: "https://images4.alphacoders.com/112/thumb-1920-1128335.jpg"
        },
    ]
    return (
        <Container>
            <div className=" h-[50vh]  md:h-full rounded-none">
                <Carousel className="sm:h-[25rem] md:h-[35rem] overflow-hidden relative rounded-none">{
                    imgArr.map((img, index) => (
                        <img src={img.imgUrl} key={index} alt="img" className="rounded-none" />
                    ))
                }
                </Carousel>
            </div>

        </Container>
    );
}

export default CarouselComponent;
