import React from 'react';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export const ParticlesComponent = () => {

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": 1
                    },
                    particles: {
                        color: {
                            value: "#FF0000",
                            animation: {
                                enable: true,
                                speed: 10
                            }
                        },
                        move: {
                            attract: {
                                enable: false,
                                distance: 100,
                                rotate: {
                                    x: 2000,
                                    y: 2000
                                }
                            },
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "destroy"
                            },
                            path: {
                                clamp: false,
                                enable: true,
                                delay: {
                                    value: 0
                                },
                                // generator: "polygonPathGenerator",
                                options: {
                                    sides: 6,
                                    turnSteps: 30,
                                    angle: 30
                                }
                            },
                            random: false,
                            speed: 3,
                            straight: false,
                            trail: {
                                // fillColor: "#000",
                                length: 20,
                                enable: true
                            }
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            value: 0
                        },
                        // opacity: {
                        //     value: 1
                        // },
                        shape: {
                            type: "circle"
                        },
                        size: {
                            value: 2
                        }
                    },
                    background: {
                        color: "#212529",
                    },
                    // fullScreen: {
                    //     zIndex: -1
                    // },
                    emitters: {
                        direction: "none",
                        rate: {
                            quantity: 1,
                            delay: 0.25
                        },
                        size: {
                            width: 0,
                            height: 0
                        },
                        position: {
                            x: 50,
                            y: 50
                        }
                    }

                    // "particles": {
                    //     "number": {
                    //         "value": 160,
                    //         "density": {
                    //             "enable": true,
                    //             "value_area": 800
                    //         }
                    //     },
                    //     "color": {
                    //         "value": "#bc9740"
                    //     },
                    //     "shape": {
                    //         "type": "circle"
                    //     },
                    //     "opacity": {
                    //         "value": 1,
                    //         "random": true,
                    //         "anim": {
                    //             "enable": true,
                    //             "speed": 1,
                    //             "opacity_min": 0,
                    //             "sync": false
                    //         }
                    //     },
                    //     "size": {
                    //         "value": 3,
                    //         "random": true,
                    //         "anim": {
                    //             "enable": false,
                    //             "speed": 4,
                    //             "size_min": 0.3,
                    //             "sync": false
                    //         }
                    //     },
                    //     "line_linked": {
                    //         "enable": false,
                    //         "distance": 150,
                    //         "color": "#ffffff",
                    //         "opacity": 0.4,
                    //         "width": 1
                    //     },
                    //     "move": {
                    //         "enable": true,
                    //         "speed": 1,
                    //         "direction": "none",
                    //         "random": true,
                    //         "straight": false,
                    //         "out_mode": "out",
                    //         "bounce": false,
                    //         "attract": {
                    //             "enable": false,
                    //             "rotateX": 600,
                    //             "rotateY": 600
                    //         }
                    //     }
                    // },
                    // "interactivity": {
                    //     "events": {
                    //         "onhover": {
                    //             "enable": true,
                    //             "mode": "bubble"
                    //         },
                    //         "onclick": {
                    //             "enable": true,
                    //             "mode": "repulse"
                    //         },
                    //         "resize": true
                    //     },
                    //     "modes": {
                    //         "grab": {
                    //             "distance": 400,
                    //             "line_linked": {
                    //                 "opacity": 1
                    //             }
                    //         },
                    //         "bubble": {
                    //             "distance": 250,
                    //             "size": 0,
                    //             "duration": 2,
                    //             "opacity": 0,
                    //             "speed": 3
                    //         },
                    //         "repulse": {
                    //             "distance": 400,
                    //             "duration": 0.4
                    //         },
                    //         "push": {
                    //             "particles_nb": 4
                    //         },
                    //         "remove": {
                    //             "particles_nb": 2
                    //         }
                    //     }
                    // },
                    // "retina_detect": true,


                    // "background": {
                    //     "color": "#232741",
                    //     "image": "url('http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1237px-NASA_logo.svg.png')",
                    //     "position": "50% 50%",
                    //     "repeat": "no-repeat",
                    //     "size": "20%"
                    // }
                }}
            />
        </div>
    );
};

