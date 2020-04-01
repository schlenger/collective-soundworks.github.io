# NOTES ON DOCUMENTATION

use [VuePress](https://vuepress.vuejs.org/) for general documentation, tutorials, etc.

use [jsdoc](https://jsdoc.app/) for API documentation

## outline 

Home
  - Logo + Overview text + some videos

Guide
  Introduction
    - Goals and Philosophy
    - Features
    - What it not aimed at...
      + list 
    - Architecture Overview

  Getting Started w/ the `soundworks-template`
    - Running your first App (distributed metronome)
      + preparing environment
      + clone
      + install
      + launch
        * open developer console
    - Overview
    - Default dependencies
      + ws
      + polka
    - Directory Structure
    - Configuration
    - The `Experience` (client and server)
    - the `sync` service
    - The `soundworks-template-build` (advanced)
    - Adding a controller

  Deployment (provide scripts examples)
    + On the Internet (using pm2)
    + On a local network (WiFi, DHCP, DNS)
    + the `https` issue
      * when is it mandatory? (motion sensors, audio worklet)
      * local settings requirements and how to
    + deploy applications w/ Electron
      * How to
      * auto-updates

  Ongoing and Future Works
    + State Management
      * review types / minimal coercion library
      * collections support
    + Streaming service
    + Shared Timeline and Transport
    + Improving communications 
    + GUI components
    + Ameize environment for Nano-Computers
    + soundworks-cli
    + create a soundworks-examples repository with all examples (remove the one here)

Services (links to repository documentation)

Tutorials
  - Shared state w/ the `stateManager`
  - Using services
  - Todo _(Noise)_
  - Synchronization and scheduling 
  - Distributed Step Sequencer
  - OSC - Communicating w/ Max/MSP or PureData
  - Implementing a service (advanced)
  - Web of Things (advanced)

Projects and Applications
  - Playground
  - CoMo

Articles

API (built w/ js doc) (not sure how to)

