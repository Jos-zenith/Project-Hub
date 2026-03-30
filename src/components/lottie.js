// Lottie Animation Handler
class LottieManager {
  constructor() {
    this.animations = [];
    this.init();
  }

  init() {
    // Load Lottie library if not already loaded
    if (!window.lottie) {
      this.loadLottieLibrary();
    } else {
      this.initializeAnimations();
    }
  }

  loadLottieLibrary() {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js';
    script.onload = () => this.initializeAnimations();
    document.head.appendChild(script);
  }

  initializeAnimations() {
    // Sample Lottie animations for posters
    const posterConfigs = [
      {
        container: document.getElementById('poster-1'),
        animationData: this.getTechInnovationData(),
        loop: true,
        autoplay: true
      },
      {
        container: document.getElementById('poster-2'),
        animationData: this.getUrbanEnergyData(),
        loop: true,
        autoplay: true
      },
      {
        container: document.getElementById('poster-3'),
        animationData: this.getDigitalDreamsData(),
        loop: true,
        autoplay: true
      }
    ];

    posterConfigs.forEach(config => {
      if (config.container) {
        const anim = lottie.loadAnimation(config);
        this.animations.push(anim);
      }
    });
  }

  // Sample animation data (simplified Lottie JSON)
  getTechInnovationData() {
    return {
      "v": "5.12.2",
      "fr": 30,
      "ip": 0,
      "op": 60,
      "w": 300,
      "h": 400,
      "nm": "Tech Innovation",
      "ddd": 0,
      "assets": [],
      "layers": [
        {
          "ddd": 0,
          "ind": 1,
          "ty": 4,
          "nm": "Circuit Layer",
          "sr": 1,
          "ks": {
            "o": {"a": 0, "k": 100},
            "r": {"a": 0, "k": 0},
            "p": {"a": 0, "k": [150, 200, 0]},
            "a": {"a": 0, "k": [0, 0, 0]},
            "s": {"a": 0, "k": [100, 100, 100]}
          },
          "ao": 0,
          "shapes": [
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": {"a": 0, "k": [200, 300]},
                  "p": {"a": 0, "k": [0, 0]},
                  "r": {"a": 0, "k": 0}
                },
                {
                  "ty": "st",
                  "c": {"a": 0, "k": [0.2, 0.6, 1, 1]},
                  "o": {"a": 0, "k": 100},
                  "w": {"a": 0, "k": 2}
                },
                {
                  "ty": "fl",
                  "c": {"a": 0, "k": [0.1, 0.1, 0.15, 1]},
                  "o": {"a": 0, "k": 100}
                }
              ]
            }
          ],
          "ip": 0,
          "op": 60,
          "st": 0
        }
      ]
    };
  }

  getUrbanEnergyData() {
    return {
      "v": "5.12.2",
      "fr": 30,
      "ip": 0,
      "op": 60,
      "w": 300,
      "h": 400,
      "nm": "Urban Energy",
      "ddd": 0,
      "assets": [],
      "layers": [
        {
          "ddd": 0,
          "ind": 1,
          "ty": 4,
          "nm": "City Layer",
          "sr": 1,
          "ks": {
            "o": {"a": 0, "k": 100},
            "r": {"a": 0, "k": 0},
            "p": {"a": 0, "k": [150, 200, 0]},
            "a": {"a": 0, "k": [0, 0, 0]},
            "s": {"a": 0, "k": [100, 100, 100]}
          },
          "ao": 0,
          "shapes": [
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "rc",
                  "d": 1,
                  "s": {"a": 0, "k": [180, 280]},
                  "p": {"a": 0, "k": [0, 0]},
                  "r": {"a": 0, "k": 0}
                },
                {
                  "ty": "st",
                  "c": {"a": 0, "k": [1, 0.4, 0.2, 1]},
                  "o": {"a": 0, "k": 100},
                  "w": {"a": 0, "k": 2}
                },
                {
                  "ty": "fl",
                  "c": {"a": 0, "k": [0.15, 0.05, 0.1, 1]},
                  "o": {"a": 0, "k": 100}
                }
              ]
            }
          ],
          "ip": 0,
          "op": 60,
          "st": 0
        }
      ]
    };
  }

  getDigitalDreamsData() {
    return {
      "v": "5.12.2",
      "fr": 30,
      "ip": 0,
      "op": 60,
      "w": 300,
      "h": 400,
      "nm": "Digital Dreams",
      "ddd": 0,
      "assets": [],
      "layers": [
        {
          "ddd": 0,
          "ind": 1,
          "ty": 4,
          "nm": "Dream Layer",
          "sr": 1,
          "ks": {
            "o": {"a": 0, "k": 100},
            "r": {"a": 0, "k": 0},
            "p": {"a": 0, "k": [150, 200, 0]},
            "a": {"a": 0, "k": [0, 0, 0]},
            "s": {"a": 0, "k": [100, 100, 100]}
          },
          "ao": 0,
          "shapes": [
            {
              "ty": "gr",
              "it": [
                {
                  "ty": "el",
                  "d": 1,
                  "p": {"a": 0, "k": [0, 0]},
                  "s": {"a": 0, "k": [200, 200]}
                },
                {
                  "ty": "st",
                  "c": {"a": 0, "k": [0.3, 0.7, 1, 1]},
                  "o": {"a": 0, "k": 100},
                  "w": {"a": 0, "k": 3}
                },
                {
                  "ty": "fl",
                  "c": {"a": 0, "k": [0.05, 0.1, 0.2, 1]},
                  "o": {"a": 0, "k": 100}
                }
              ]
            }
          ],
          "ip": 0,
          "op": 60,
          "st": 0
        }
      ]
    };
  }
}

// Initialize Lottie manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new LottieManager();
});