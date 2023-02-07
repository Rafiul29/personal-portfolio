import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useImageReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: "-100vh",
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

export const useHeadLineReveal = (items, delay = 0) => {
  useEffect(() => {
    let el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [items, delay]);
};

export const useLinkReveal = (items, delay = 0) => {
  useEffect(() => {
    let el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

export const useBioReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1.5,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

export const useSocialReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        x: -500,
      },
      {
        x: 0,
        duration: 1.5,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

export const useSectionTitleReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1.5,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el, delay]);
};

export const useProjectLeftrightReveal = (items, delay = 0) => {
  useEffect(() => {
    let el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

export const useSkillLineReveal = (items) => {
  useEffect(() => {
    items.forEach((el) => gsap.to(el, {
        scrollTrigger:{
            trigger:el,
            onEnter(){
                el.classList.add("reveal")
            }
        }
    }));
  }, [items]);
};

export const useSkillTextReveal = (el) => {
 useEffect(()=>{
    gsap.fromTo(el,{
        y:200
    },{
        y:0,
        duration:1,
        ease:"power4.out",
        stagger:0.3,
        scrollTrigger:{
            trigger:el,
        }
    })
 },[el])
};


export const useFooterReveal = (item) => {
    useEffect(()=>{
        let el =item.current
       gsap.fromTo(el,{
           y:-100
       },{
           y:0,
           duration:1,
           ease:"power4.out",
           stagger:0.3,
           scrollTrigger:{
               trigger:el,
           }
       })
    },[item])
   };
   


   export const useInputFieldReveal = (items, delay = 0) => {
    useEffect(() => {
      let el = items.map((item) => item.current);
      gsap.fromTo(
        el,
        {
          y: 200,
          opacity:0
        },
        {
          y: 0,
          opacity:1,
          duration: 1,
          delay,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: el,
          },
        }
      );
    }, [items, delay]);
  };