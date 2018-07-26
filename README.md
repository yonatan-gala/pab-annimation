# coral-pab-animation example

[https://yonatan-gala.github.io/coral-pab-animation/]

## demonstration for Pick A BOX animation

## Environment set up
1. npm ^6
2. npm i
3. 'gulp sass' to build.
4. 'gulp sass:watch' to watch.
5. 'gulp connect' for a live server.

### concepts summary:
1. we create keyframes animation.
2. we create a sprite.
3. we create animation that moves the sprite 
4. we apply the animation with steps() according to the key frames.
    -  to stay ate last frame we deduce one key frame.
    -  per 8 keyframes we will ue 7 steps and so on.  
    - per @2 retina support backround-size and position values are devided by 2.
      - if not applied correctly this will not work.

### details
1. set element width and height  
   -  this is already applied within the pick a 'lci-pick-a-box-popup__main-img'  
   -  you need to apply it for the 'coral' popup as well. 
2. one the modifier level (use case level) apply animation.
   -  per examples below: 
   -  'animation-item--welcome' emulates the welcome animation for 'pick-a-box' component popup--welcome.  
   -  it should be within 'lci-pick-a-box-popup__main-img--welcome'
   - 'animation-item--coral' emulates the coral native popup with a specific web content.
     - the definitions here should be pasted there.
3. we apply specific breakpoint definitions per each animation  
   -  animation-name.  
   -  background-image.  
   -  background-size.  
      -  all have variable names.
4. we apply generic animation properties once. 
   -  duration
   -  fill mode  
   - animation-timing-function (steps)  
   - background position and repeat.

### how it works:
1. we have created png sprites.
    -  one per each breakpoint.
    -  mobile and tablet are @2 retina ready.
2. we define background-size per each breakpoint.  
    - @2 sprites background size should be divided by 2.
3. we associate specific animations per each breakpoint. 
````scss 
@keyframes pick-a-box-animation-coral-mobile {
     100% {
     // mobile is @2 retina
     // we calculate:
     // - total keyframes: 9 
     // - key frame width: 400px;
     // - total width: 3600px
     // this is the last frame so we calculate: ( total-width - key-frame-width)
     // and devide with 2
       background-position-x: -1600px;
     }
   } 
````      
now we apply the animation: 
-  we position the background to the left
-  animation goes from left to right and we built the sprite accordingly
-  magical part: 
    -  apply 'animation-timing-function' with steps (animation-timing-function)
    - since we play the animation once: 
        -  animation-fill mode: forwards
        -  steps number is: ( 'the number of keyframes images' - 1 )
        -  the animated position is (total width of sprite - )  
-  we added small animation delay to enable proper view for the animation start
````scss
.some-selector {
    background-position: left center;
    background-repeat: no-repeat;
   animation-delay: $some-delay-variable;
    // magical part
    animation-duration: $some-duration-variable;
    // - stop at last frame
    animation-fill-mode: forwards;
    // - move by steps (this is what makes the animation.
    animation-timing-function: steps($number-of-keyframes -1);
}

````

## styles folder
we have coral dependencies. 
  - scaffold and resets. 
  - respond-to
  - get-image
  - global variables
animation is defined within:
  - '__config-animation.scss': variables ,keyframes 
  - '__config-animation': element definition.  
  
### configurable variables:
-  total key frames (shared) per each animation
-  animation duration (shared) per each animation
-  sprite src per each breakpoint
-  keyframe width per each breakpoint. (taken from src calculations)
-  sprite height per each breakpoint. (taken from src calculations)
-  the rest of the used variable are calculated by operating in the configured variables.
