# Kibo Web Scavenger Hunt

Mostly: using the chrome inspector + dev console to find some secret messages

- Enter the hidden message into an input to reveal the next prompt
- Follow all the prompts / find the password to gain entry into the course

Brainstorm:
- basic: type some text that's visible on the page
- find the title of the page
- find an html attribute
- find a css property (what color is the circle? 'red')
  - what color is _this_ rectangle? Not a named color like 'red', a hex value
      like #101101
- find a message hidden under an html element
    - can use the inspector
    - or can move the element out of the way / delete the element hiding the
        message
- position some element at a particular location to see a particular message
      - some text that's in a given spot (offscreen) position absolutely to make
          it 'reveal' the full message
- use `btoa()` in the console to reveal a hidden message
    - or some other javascript?

Some can be basic / then there's a secret 'advanced' mode
