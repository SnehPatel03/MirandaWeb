const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
  var tl = gsap.timeline();
  tl.to("#page1" , {
    y: "100vh",
    duration: 0,
    scale:0.5,
    delay: 1.
  });
  tl.to("#page1" , {
    y: "10vh",
    duration:1,
    delay:1.
  });
  tl.to("#page1" ,{
      y:"0vh",
      rotate:-360,
      duration:1.5,
      delay:1.7,
      scale:1.
   })