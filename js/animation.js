gsap.registerPlugin(ScrambleTextPlugin);

gsap.from("h2", {
  duration: 1.5,
  scrambleText: {
    text: "{original}",
    chars: "camelCase0123456789⊂⊕∪∩⫮⋲⦢",
    speed: 1
  }
});

gsap.from("section", {
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});