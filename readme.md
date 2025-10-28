<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://user-images.githubusercontent.com/4341982/195147759-9ef71358-6e69-469b-9f0f-4209c46f58a3.jpg">
    <img src="https://user-images.githubusercontent.com/4341982/195147759-9ef71358-6e69-469b-9f0f-4209c46f58a3.jpg" alt="Logo">
  </a>

  <h3 align="center">Mobile Game</h3>

  <p align="center">
    An example mobile game with use of Phaser, Parcel and Cordova.
    <br />
    <a href="https://github.com/michalzagrodzki/phaser3-parcel-cordova-project-template">View Demo</a>
    ·
    <a href="https://github.com/michalzagrodzki/phaser3-parcel-cordova-project-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/michalzagrodzki/phaser3-parcel-cordova-project-template/issues">Request Feature</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#building">Building</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://user-images.githubusercontent.com/4341982/195149956-d6fa9e17-c320-491a-a4f5-a365665dc961.jpg)

This starter brings Phaser 3, Parcel, and Apache Cordova together so you can ship a mobile-ready prototype in minutes. Parcel 2 powers the development server, while a custom build script outputs Cordova-friendly bundles to `www/`. The default scene recreates the official Phaser platformer tutorial, complete with physics, collectibles, and touch-ready input hooks.

Why this template helps you move fast:
* Cordova configuration for Browser and iOS platforms is already wired up, including plugin stubs and splash handling.
* Parcel dev tooling delivers hot-reload while keeping asset imports simple through ES modules.
* A production build script injects `cordova.js` automatically and produces ready-to-run assets for emulator or device testing.

The project will keep evolving—issues and pull requests are welcome if you spot gaps or want to contribute enhancements.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Project Structure

```
phaser3-parcel-cordova-project-template/
├── src/                # Game source (HTML shell, Phaser entry, scenes, assets, styles)
├── scripts/            # Build utilities (Parcel v1 bundler script for Cordova output)
├── config.xml          # Cordova application manifest and platform preferences
├── package.json        # npm scripts, dependencies, and Cordova platform definitions
├── license.txt         # Project license (MIT)
└── readme.md           # Project overview and contributor docs
```

Key runtime files:
- `src/index.js` starts the Phaser game and waits for `deviceready` on devices.
- `src/game.js` hosts the sample platformer scene, assets, and physics configuration.
- `scripts/beforeBuild.js` bundles to `www/` and injects the `cordova.js` script tag post-build.

### Built With

This game was built with following technologies.

* [![Phaser][Phaser]][Phaser-url]
* [![Parcel][Parcel]][Parcel-url]
* [![Cordova][Cordova]][Cordova-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

To start working with boilerplate, please follow instructions below.

### Prerequisites

You need the following tooling before running the project:

* Node.js & npm – install from [nodejs.org](https://nodejs.org/) or via a version manager.
* Cordova CLI (global)
  ```sh
  npm install -g cordova
  ```

### Installation

Use the steps below to install dependencies and boot the template locally.

1. Clone the repo
   ```sh
   git clone https://github.com/michalzagrodzki/phaser3-parcel-cordova-project-template.git
   cd phaser3-parcel-cordova-project-template
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Add the Cordova browser platform (skip if already present)
   ```sh
   cordova platform add browser
   ```
4. Start the Parcel dev server with hot reload
   ```sh
   npm run dev
   ```
  
### Building

Use these commands to bundle the project for Cordova and launch the provided targets.

1. Create a production bundle for Cordova
   ```sh
   npm run build
   ```
2. Run the bundled app in a Cordova browser shell
   ```sh
   npm run web
   ```
3. Launch the iOS emulator (requires Xcode tooling)
   ```sh
   npm run ios
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This boilerplate is a starting point for further development of games for mobile platforms.

Start by modifying the logic in `src/game.js`, then add new scenes under `src/` and register them within the `scene` array in `src/index.js`.

_For guidance and examples on how to develop games with Phaser, please refer to the [Documentation](https://phaser.io)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Add Changelog
- [ ] Add Deployment Steps
- [ ] Add Additional Templates w/ Examples
- [ ] Add Support for Typescript
- [ ] Multi-language Support
    - [ ] Spanish

See the [open issues](https://github.com/michalzagrodzki/phaser3-parcel-cordova-project-template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `license.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Michal Zagrodzki - [@michalzagrodzki](https://twitter.com/michalzagrodzki)

Project Link: [https://github.com/michalzagrodzki/phaser3-parcel-cordova-project-template](https://github.com/michalzagrodzki/phaser3-parcel-cordova-project-template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Following resources were helpful in building this boilerplate:

* [Phaser3 documentation](https://newdocs.phaser.io/docs/3.55.2)
* [Parcel documentation](https://parceljs.org/docs/)
* [Cordova documentation](https://cordova.apache.org/docs/en/11.x/)
* [Best readme template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/michalzagrodzki/phaser3-parcel-cordova-project-template.svg?style=for-the-badge
[contributors-url]: https://github.com/michalzagrodzki/phaser3-parcel-cordova-project-template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/michalzagrodzki/phaser3-parcel-cordova-project-template.svg?style=for-the-badge
[forks-url]: https://github.com/michalzagrodzki/phaser3-parcel-cordova-project-template/network/members
[stars-shield]: https://img.shields.io/github/stars/michalzagrodzki/phaser3-parcel-cordova-project-template.svg?style=for-the-badge
[stars-url]: https://github.com/michalzagrodzki/phaser3-parcel-cordova-project-template/stargazers
[issues-shield]: https://img.shields.io/github/issues/michalzagrodzki/phaser3-parcel-cordova-project-template.svg?style=for-the-badge
[issues-url]: https://github.com/michalzagrodzki/phaser3-parcel-cordova-project-template/issues
[license-shield]: https://img.shields.io/github/license/michalzagrodzki/phaser3-parcel-cordova-project-template.svg?style=for-the-badge
[license-url]: https://github.com/michalzagrodzki/phaser3-parcel-cordova-project-template/blob/master/license.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/michaelzagrodzki/
[product-screenshot]: https://user-images.githubusercontent.com/4341982/195149956-d6fa9e17-c320-491a-a4f5-a365665dc961.jpg
[Phaser]: https://img.shields.io/badge/phaser3-000000?style=for-the-badge&logo=Lapce&logoColor=white
[Phaser-url]: https://phaser.io/
[Parcel]: https://img.shields.io/badge/Parcel-20232A?style=for-the-badge&logo=pkgsrc&logoColor=61DAFB
[Parcel-url]: https://parceljs.org/
[Cordova]: https://img.shields.io/badge/Cordova-35495E?style=for-the-badge&logo=Apache+Cordova&logoColor=4FC08D
[Cordova-url]: https://cordova.apache.org/
