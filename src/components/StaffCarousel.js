import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Button,
} from 'reactstrap';

const items = [
  {
    src: require("assets/img/faces/AviProfile.jpg"),
    name: 'Avinash Naidu',
    role: 'Person/Founder',
    altText: 'Profile Photo',
    caption: 'Creating a place for people to come to learn, share and grow together. I want to get to the peak surrounded by the people that helped me along the way.',
    socialMedia: [
      { icon: 'fa fa-instagram', link: 'https://www.instagram.com/avinashofthewild/' },
      { icon: 'fa fa-linkedin', link: 'https://www.linkedin.com/in/avinash-naidu-638ba977/' }
    ],
  },
  {
    src: require("assets/img/faces/kheeran_profile.jpg"),
    name: 'Kheeran Naidu',
    role: 'CTO',
    altText: 'Profile Photo',
    caption: 'Growing like a plant while pursuing a PhD in Algorithms. Interested in research and development, aiming to reduce inefficiencies.',
    socialMedia: [
      { icon: 'fa fa-github', link: 'https://github.com/kheeran' },
      { icon: 'fa fa-linkedin', link: 'https://www.linkedin.com/in/kheeran/' }
    ],
  },
  {
    src: require("assets/img/faces/Sultani_Profile.jpg"),
    name: 'Mohammad Sultani',
    role: 'Developer',
    altText: 'Profile Photo',
    caption: `Addressing business requirements with code is fun, but it can get even more interesting when your job is simplifying other people's tasks and business operations.`,
    socialMedia: [
      { icon: 'fa fa-github', link: 'https://github.com/mohammadsultani' },
      { icon: 'fa fa-instagram', link: 'https://www.instagram.com/md_sultani/' },
      { icon: 'fa fa-linkedin', link: 'https://www.linkedin.com/in/mohammad-sultani/' }
    ],
  },
  {
    src: require("assets/img/faces/Jack_Profile.jpg"),
    name: 'Jack Te',
    role: 'Developer',
    altText: 'Profile Photo',
    caption: 'Developing and maintaining existing and new apps with clean and reusable codes. Sharing ideas and trying to make an Impact on the people around me.',
    socialMedia: [
      { icon: 'fa fa-github', link: 'https://github.com/VanBawi' },
      { icon: 'fa fa-linkedin', link: 'https://www.linkedin.com/in/jack-te-ba5ba6166/' }
    ],
  }
];

const StaffCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [windoWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div style={{ display: 'flex',justifyContent: 'center' }}>
          <Card className="card-profile card-plain" style={{width: windoWidth>500?'350px': '250px', height: windoWidth>500?'340px':'400px'}}>
            <div className="card-avatar">
              <a>
                <img
                  alt={item.altText}
                  src={item.src}
                />
              </a>
            </div>
            <CardBody>
              <a>
                <div className="author">
                  <CardTitle tag="h4">{item.name}</CardTitle>
                  <h6 className="card-category">{item.role}</h6>
                </div>
              </a>
              <p className="card-description text-center">
                {item.caption}
              </p>
            </CardBody>
            <CardFooter className="text-center" >
              {item.socialMedia.map(e => <Button
                className="btn-just-icon btn-neutral ml-1"
                color="link"
                href={e.link}
                target="_blank"
              >
                <i className={e.icon} />
              </Button>)}
            </CardFooter>
          </Card>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default StaffCarousel;