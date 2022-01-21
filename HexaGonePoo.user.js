// ==UserScript==
// @name        HexaGone - Poo
// @namespace   https://github.com/4ndv/HexaGone
// @match       https://twitter.com/*
// @grant       none
// @version     1.0
// @author      @libneko
// @description Replaces hexagonal avatar with a better one
// @downloadURL https://raw.githubusercontent.com/4ndv/HexaGone/main/HexaGonePoo.user.js
// @homepageURL https://github.com/4ndv/HexaGone
// @supportURL  https://github.com/4ndv/HexaGone/issues
// @license     MIT
// ==/UserScript==

let hexagoneTries = 0;

function findAndReplaceMask() {
  console.log('Trying...');
  hexagoneTries += 1;

  const mask = document.querySelector('#hex-hw-shapeclip-clipconfig');

  if (!mask) return false;

  mask.outerHTML = '<clipPath clipPathUnits="objectBoundingBox" id="hex-hw-shapeclip-clipconfig" transform="scale(0.0015 0.0015)"><path d="m400.39,588.42c-57.2,-0.98 -114.02,-6.3 -170.57,-15.33c-13.47,-2.15 -27.96,-0.14 -41.68,1.97c-20.06,3.09 -39.75,8.42 -59.74,12.01c-25.86,4.65 -51.38,2.17 -75.45,-8.26c-23.58,-10.22 -37.24,-29.21 -41.66,-54.38c-4.17,-23.71 -2.28,-46.87 9.25,-68.56c12.03,-22.62 31.16,-36.97 54.73,-45.66c4.7,-1.73 5.22,-3.39 4.08,-7.87c-9.88,-38.89 -1.5,-72.89 28,-100.83c7.97,-7.55 17.62,-12.49 27.98,-16.07c6.98,-2.41 7.09,-2.93 4.46,-9.6c-11,-27.96 -4.24,-53.22 11.93,-76.96c11.52,-16.9 27.6,-28.15 45.87,-36.68c11.72,-5.47 11.51,-5.53 10.17,-18.15c-2.03,-19.13 5.48,-35.52 15.31,-51.15c3.54,-5.64 7.21,-11.19 10.63,-16.91c4.27,-7.14 3.6,-14.29 -0.42,-21.33c-2.14,-3.76 -4.51,-7.41 -6.34,-11.32c-4.2,-8.99 0.71,-19.04 10.22,-21.84c8.86,-2.61 17.63,-1.34 26.16,0.92c17.15,4.56 33.31,11.43 48.04,21.59c8.07,5.56 17.12,9.74 24.98,15.56c25.65,18.99 48.1,41.1 63.81,69.29c9.48,17.01 14.91,34.9 10.96,54.62c-0.68,3.42 1.29,4.49 4.03,5c12.27,2.29 23.42,7.25 34.15,13.56c22.06,12.96 36.32,41.15 33.17,66.59c-0.18,1.48 -0.51,2.96 -0.91,4.4c-2.11,7.53 -2.14,7.56 5.22,10.75c31.74,13.77 51.34,37.27 57.11,71.66c2.81,16.77 1.56,33.27 -5.24,49c-1.89,4.36 -0.84,6.23 3.3,7.9c14.62,5.91 28.17,13.45 39.36,24.96c15.45,15.88 21.99,35.29 24.02,56.77c3.24,34.15 -14.17,56.86 -44.93,71.6c-22.04,10.56 -45.64,15.74 -69.74,18.55c-16.04,1.87 -32.16,3.29 -48.29,4.06c-13.96,0.67 -27.98,0.14 -41.97,0.14zm68.06,-248.69c-0.54,-25 -5.06,-41.25 -19.8,-59.29c-24.93,-30.51 -64.76,-30.35 -88.33,1.52c-24.03,32.5 -24.79,68.3 -6.71,104.05c7.93,15.68 20.8,26.96 38.35,31.13c22.86,5.44 44.88,-3.78 58.9,-23.39c12.15,-17.01 17.66,-35.95 17.59,-54.02zm-190.55,-1.46c-1.17,-23.92 -6.37,-46.14 -24.7,-63.67c-16.2,-15.49 -38.98,-20.75 -57.49,-12.86c-17.3,7.37 -28.47,20.9 -36.1,37.05c-10.44,22.11 -10.61,45.34 -3.83,68.76c5.73,19.81 17.28,35.62 34.92,45.68c22.57,12.87 50.15,5.98 67.05,-15.45c13.52,-17.13 20.77,-37.12 20.15,-59.51zm31.42,174.56c10.21,-1.26 20.68,-1.5 30.58,-3.97c21.67,-5.42 40.53,-16.73 57.31,-31.26c6.6,-5.71 12.55,-12.35 17.98,-19.21c4.33,-5.47 1.87,-11.55 -4.89,-13.72c-2.61,-0.84 -5.57,-1.04 -8.33,-0.9c-21.26,1.06 -42.51,3.14 -63.77,3.25c-40.59,0.21 -81.23,0.96 -121.71,-3.53c-3.37,-0.37 -7.37,0.77 -10.41,2.44c-5.95,3.27 -7,7.52 -2.54,12.64c6.72,7.71 13.67,15.49 21.67,21.77c24.57,19.3 51.28,33.66 84.11,32.49z"></path><path d="m434.94,338.7c-0.06,12.14 -2.35,22.63 -8.18,32.09c-11.43,18.58 -31.01,18.96 -43.18,0.92c-12.47,-18.49 -11.41,-50.1 2.28,-67.93c10.96,-14.27 27.84,-14.17 38.64,0.26c7.94,10.62 10.32,22.86 10.44,34.66z"></path><path d="m244.88,340.53c-0.27,11.6 -2.89,24.45 -11.99,35.21c-10.57,12.5 -26.18,12.55 -36.45,-0.27c-10.89,-13.6 -13.15,-29.52 -11.07,-46.29c1.16,-9.4 4.62,-17.94 10.29,-25.65c9.72,-13.22 26.58,-13.87 37.11,-1.24c7.79,9.35 11.57,20.7 12.11,38.24z"></path></clipPath>';

  return true;
}

function tryUntilFound() {
  const result = findAndReplaceMask();

  console.log('Result: ' + result);

  if (!result && hexagoneTries <= 10) setTimeout(tryUntilFound, 1000);
}

tryUntilFound();
