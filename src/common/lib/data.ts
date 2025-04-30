import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import filedriveImg from '@/../public/images/file-drive.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import surgeImg from '@/../public/images/surge.png';
import portfolioImg from '@/../public/images/portfolio.png';
import auditMasterImg from '@/../public/images/audit-master.png';
import accountingImg from '@/../public/images/accounting.jpg';
import smartHelmetCover from '@/../public/images/smart_helmet_project/cover.jpg';
import smartHelmet1 from '@/../public/images/smart_helmet_project/3.jpg';
import IRLogo from '@/../public/svgs/ingersoll-rand.svg';
import { BookIcon, BriefcaseBusinessIcon } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Education',
    id: 'education',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const educationData = [
  {
    
    university: 'University of Cincinnati',
    degree: 'Ph.D. Electrical Engineering',
    location: 'Cincinnati, Ohio',
    courses:[
      'Fundamentals of MEMS',
      'Microfabrication Lab',
      'Advanced MEMS', 
      'Lab on Chips', 
      'Biosensors & Bioelectronics', 
      'Microfabrication of Semiconductor Devices'
    ],
    icon: './svgs/UC.svg' ,
    date: 'Jan 2021 - Present',
  },
  {
    
    university: 'International Institute of Information Technology',
    degree: 'Master of Technology in Electronic System Design',
    location: 'Bangalore, India',
    courses:[
      'Device Drivers',
      'RTOS',
      'Modern OS',
      'Advanced ARM Architecture',
      'Analog CMOS VLSI Design',
      'CMOS Digital IC Design',
      'Inter Device Communication'
    ],
    icon: './svgs/IIITB.jpg' ,
    date: 'July 2016 - July 2018',
  },
  {    
    university: 'Manipal Institute of Technology',
    degree: 'Bachelor of Technology in Electronics and Communication',
    location: 'Bangalore, India',
    courses:[
      'Digital Electronics',
      'Analog Circuits',
      'Integrated Circuits',
      'VLSI Design',
      'Microcontrollers',
      'Digital Signal Processing',
      'Embedded Systems'
    ],
    icon: './svgs/Manipal.jpg' ,
    date: 'July 2012 - July 2016',
  },
] as const;


export const experiencesData = [
  {
    title: 'Graduate Research Assistant',
    company: 'University of Cincinnati',
    location: 'Cincinnati, Ohio',
    description:
      'Electrical Engineer with focus on sensor and system design, fabrication and testing.',
    icon: './svgs/UC.svg' ,
    date: 'Jan 2021 - Present',
  },
  {
    title: 'Software Engineer 3',
    company: 'Cisco Systems',
    location: 'Bangalore, India',
    description:
      'Front-end Developer. Delivering flawless UI/UX, Frontend Workflow, Architecture & App Development.',
    icon: './svgs/cisco.svg',
    date: 'Oct 2020 - Dec 2020',
  },
  {
    title: 'Software Engineer 2',
    company: 'Cisco Systems',
    location: 'Bangalore, India',
    description:
      'Front-end Developer. Delivering flawless UI/UX, Frontend Workflow, Architecture & App Development.',
    icon: './svgs/cisco.svg',
    date: 'Aug 2018 - Oct 2020',
  },
  {
    title: 'Software Intern',
    company: 'Cisco Systems',
    location: 'Bangalore, India',
    description:
      'Front-end Developer. Delivering flawless UI/UX, Frontend Workflow, Architecture & App Development.',
    icon: './svgs/cisco.svg',
    date: 'Jan 2018 - June 2020',
  },
  {
    title: 'Software Intern',
    company: 'Cisco Systems',
    location: 'Bangalore, India',
    description:
      'Front-end Developer. Delivering flawless UI/UX, Frontend Workflow, Architecture & App Development.',
    icon: './svgs/cisco.svg',
    date: 'May 2017 - June 2017',
  },
  {
    title: 'Ingersoll Rand',
    location: 'Bangalore, India',
    description:
      'Front-end Developer. Responsible for implemntation of accessible and interactive interface. Working on various projects with AI integration.',
      icon: './svgs/ingersoll-rand.svg',
    date: 'Jan 2016 - June 2016',
  },
  {
    title: 'Schneider Electric',
    location: 'Bangalore, India',
    description: `Bachelor's degree in Cybersecurity. The faculty of Cyber Security and Software Engineering.`,
    icon: './svgs/SE.png',
    date: 'June 2015 - July 2015',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  filedriveImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'High-Efficiency Nanoparticle Charger',
    description: `Designed a compact unipolar corona-based charger to enhance detection efficiency in miniaturized airborne nanoparticle monitoring systems.`,
    tags: ['COMSOL Multiphysics', 'Electrostatics', 'Microfluidics', 'Nanoparticle Detection', 'Sensor Design'],
    imageUrl: accountingImg,
    link: '',
    detailedDescription: [
      `This project focused on developing a miniature unipolar corona-based charger to improve the charge transfer efficiency of airborne nanoparticles for real-time sensing applications. The goal was to enable high-sensitivity detection in portable air quality monitoring systems by maximizing the number of charged particles reaching the downstream sensor.`,
      
      `The charger generates ions using a sharp electrode under high voltage. As air flows through the device, these ions attach to neutral nanoparticles suspended in the airstream. I simulated the device using COMSOL Multiphysics to model the electric field distribution, airflow patterns, ion diffusion, and particle trajectories. These simulations helped me understand how particle charging and losses occur inside the system.`,
      
      `By iteratively adjusting the geometry of the electrodes and flow channel, I minimized particle losses caused by diffusion and electrostatic forces. I also evaluated how changes in input parameters—such as applied voltage and flow rate—affect charging efficiency and particle transmission. The final design showed strong potential for integration into compact and efficient airborne nanoparticle detection platforms.`,
      
      `This charger plays a key role in next-generation aerosol instrumentation, particularly for applications requiring miniaturized and low-flow operation. It supports improved detection accuracy and energy efficiency in systems designed for environmental monitoring, workplace safety, and health research.`,

    ],
    extraImg: [accountingImg, accountingImg],
  },
  
  {
    title: 'Smart Helmet for TBI Detection',
    description: `Designed and developed a sensor-integrated smart helmet for early detection of traumatic brain injury (TBI) in high-impact environments such as sports and construction sites.`,
    tags: ['Embedded Systems', 'IoT', 'C/C++', 'Impact Sensing', 'TBI Detection', 'Sensor Fusion'],
    imageUrl: smartHelmetCover,
    link: '', // Add GitHub or documentation link if available
    detailedDescription: [
      `This project involved the development of a smart helmet capable of detecting potential traumatic brain injuries (TBI) by monitoring and analyzing high-impact forces in real time. The system is designed to be used in environments like contact sports, construction, or military settings where head injuries are a major concern.`,
  
      `The helmet integrates an array of sensors, including a 3-axis accelerometer and gyroscope, to detect sudden acceleration, rotational forces, and impact magnitudes experienced by the head. The microcontroller collects and processes sensor data using embedded C/C++ code, filtering out noise and identifying impact thresholds that may indicate possible TBI.`,
  
      `Upon detecting an impact above a critical threshold, the system immediately triggers alerts via a wireless communication module, sending data to a connected device or server for logging and further analysis. Local alerts via LEDs and buzzers also notify the user or nearby personnel of a potential injury.`,
  
      `The smart helmet aims to enable early intervention and medical evaluation following head impacts, helping to reduce the long-term consequences of undetected brain trauma. Its modular design allows for scalability, data logging, and real-time monitoring, making it suitable for integration into existing safety protocols in both sports and industrial environments.`
    ],
    extraImg: [smartHelmet1, accountingImg] // Replace with actual images if available
  },
  {
    title: 'Real-Time Particle Exposure Protection System',
    description: `Developed a real-time wearable system to monitor and respond to airborne particle exposure, aimed at improving safety in occupational and high-risk environments.`,
    tags: ['Embedded Systems', 'Sensor Integration', 'Real-time Monitoring', 'Air Quality', 'Wearable Tech'],
    imageUrl: accountingImg, // Replace with your actual image reference
    link: '', // Add GitHub or documentation link if available
    detailedDescription: [
      `This project focused on creating a wearable system that continuously monitors airborne particle concentration in real-time to protect individuals working in environments with high exposure risks, such as industrial plants, construction sites, and laboratories. The system aims to provide immediate feedback and alerts when exposure exceeds safe thresholds.`,
  
      `The device incorporates a compact, low-power particle sensor capable of detecting fine particulate matter (e.g., PM2.5 and PM10), coupled with a microcontroller that processes sensor data and performs threshold-based analysis. The embedded firmware, developed in C/C++, enables real-time sampling, filtering, and comparison against predefined safety limits.`,
  
      `When the particle concentration crosses critical exposure levels, the system activates both local alerts (via buzzers and LEDs) and remote alerts through wireless modules, allowing supervisory personnel or healthcare systems to be notified instantly. The data can be logged for later review and trend analysis.`,
  
      `This real-time protection system enhances workplace safety by enabling early response to poor air quality conditions, potentially preventing long-term respiratory or cardiovascular issues caused by chronic exposure. Its lightweight, battery-powered design ensures comfort and usability for extended periods in the field.`
    ],
    extraImg: [accountingImg, accountingImg] // Replace with actual images
  },
  {
    title: 'Battery-Powered Wireless Sensor Network',
    description: `Designed a low-power wireless sensor network for non-invasive monitoring of water usage events in residential and commercial plumbing systems.`,
    tags: ['Wireless Sensor Network', 'Battery Optimization', 'IoT', 'Embedded Systems', 'Water Monitoring'],
    imageUrl: accountingImg, // Replace with your actual image reference
    link: '', // Add GitHub, paper, or deployment link if available
    detailedDescription: [
      `This project involved the design and deployment of a battery-powered wireless sensor network (WSN) to detect and monitor water usage events in premise plumbing systems without modifying or cutting into the pipes. The goal was to provide a scalable, non-invasive solution for water conservation and infrastructure diagnostics.`,
  
      `Each sensor node in the network is equipped with a custom-designed calorimetric flow sensor that attaches externally to cold and hot water lines. These nodes capture temperature changes associated with water flow events and transmit data wirelessly to a central hub or gateway. The system is optimized for low power consumption to support multi-year battery life.`,
  
      `The embedded firmware, written in C/C++, manages power-efficient data acquisition, local signal processing, and wireless communication. Event classification is handled using heuristics based on temperature signatures, enabling identification of usage types such as faucet use, toilet flushing, or showers.`,
  
      `This WSN architecture enables building-wide deployment for real-time water usage monitoring and anomaly detection, such as identifying leaks or unusual consumption patterns. It provides actionable insights for conservation, maintenance planning, and smart home integration without requiring invasive plumbing modifications.`
    ],
    extraImg: [accountingImg, accountingImg] // Replace with your actual setup images
  },

  {
    title: 'Non-Invasive Sensor for Waterflow Event Detection',
    description: `Developed a non-invasive calorimetric sensor to detect water flow events in residential and commercial plumbing systems, aiding in water usage monitoring and leak detection.`,
    tags: ['Sensor Design', 'Calorimetry', 'Waterflow Monitoring', 'Non-Invasive', 'IoT'],
    imageUrl: accountingImg, // Replace with your actual image reference
    link: '', // Add GitHub or project page if available
    detailedDescription: [
      `This project involved the design and implementation of a non-invasive calorimetric sensor to detect waterflow events in premise plumbing systems. The goal was to provide an efficient, cost-effective way to monitor water usage and detect leaks without requiring physical alterations to existing piping systems.`,
  
      `The calorimetric sensor works by measuring minute temperature changes in the water flow as it passes through the pipe. These temperature fluctuations are caused by the thermal properties of the water being altered by the flow events, such as faucet usage or a toilet flush. The sensor is capable of accurately detecting these changes without direct contact with the water, making it completely non-invasive.`,
  
      `I utilized embedded systems and low-power electronics to process the temperature data in real time, differentiating between various water flow events. The system uses a combination of analog and digital sensors along with custom firmware to capture, process, and classify events based on the magnitude and duration of the temperature shifts.`,
  
      `This non-invasive calorimetric sensor is ideal for integrating into smart home systems, enabling real-time monitoring of water usage, leak detection, and conservation efforts. Its wireless data transmission allows for seamless integration with cloud-based platforms, making it suitable for large-scale deployment in both residential and commercial buildings.`
    ],
    extraImg: [accountingImg, accountingImg] // Replace with your actual images
  },
  {
    title: 'Implantable Sensor for Periprosthetic Joint Infection',
    description: `Developed an implantable sensor for the early detection of periprosthetic joint infections (PJI), utilizing passive wireless interrogation to monitor infection indicators without the need for battery-powered systems.`,
    tags: ['Implantable Sensors', 'Wireless Interrogation', 'Periprosthetic Joint Infection', 'Biomedical Engineering', 'Passive Sensors'],
    imageUrl: accountingImg, // Replace with your actual image reference
    link: '', // Add project page or research link if available
    detailedDescription: [
      `This project involved the development of an implantable differential sensor designed to detect early signs of periprosthetic joint infection (PJI), a serious complication following joint replacement surgery. The sensor was designed to monitor biochemical or inflammatory markers indicative of infection within the joint, using passive wireless interrogation to transmit data externally without the need for batteries or wires inside the body.`,
  
      `The sensor uses a differential measurement technique, where it compares environmental conditions within the joint, such as temperature or pH, to baseline values. When these parameters deviate beyond a certain threshold, indicating potential infection, the sensor transmits data to an external reader via passive radio frequency (RF) signals. This allows for continuous monitoring without requiring invasive procedures or frequent hospital visits.`,
  
      `The system was designed to be energy-efficient by leveraging passive wireless interrogation, which is powered externally by an RF signal. This minimizes the need for invasive procedures or battery replacement, a key consideration for long-term implant reliability and patient comfort. The sensor was integrated with a biocompatible housing to ensure safe implantation and prolonged use in the human body.`,
  
      `The implantable sensor provides a promising solution for early, real-time detection of PJI, enabling timely medical intervention and reducing the risk of long-term complications. Its passive wireless functionality, combined with its small form factor, makes it suitable for long-term deployment in clinical settings, offering a reliable tool for post-surgical care and infection prevention in patients with joint replacements.`
    ],
    extraImg: [accountingImg, accountingImg] // Replace with your actual images
  },
  {
    title: 'Clean Room Fabrication of Silicon Pressure Sensors',
    description: `Fabrication of MEMS-based silicon pressure sensors using microfabrication techniques in a cleanroom environment, achieving high accuracy and repeatability through precise testing.`,
    tags: ['MEMS', 'Microfabrication', 'Cleanroom', 'Silicon Sensors', 'Pressure Sensing'],
    imageUrl: accountingImg,
    link: '', // Optional: add portfolio or publication link
    detailedDescription: [
      `This project involved the fabrication of MEMS-based pressure sensors on 2-inch n-type silicon wafers in a cleanroom environment. Using established microfabrication process flows, I achieved highly accurate pressure sensing by focusing on precise resistance and voltage testing.`,
     
      `The fabrication process included photolithography, etching, and deposition techniques to pattern the sensor components onto the silicon wafer. This was followed by the integration of electrical contacts and microstructures designed to detect pressure variations with high sensitivity.`,
     
      `Through extensive testing, the sensors demonstrated 90% accuracy, with thorough resistance and voltage measurements taken at multiple stages of the fabrication process. These tests were critical for ensuring sensor performance and identifying areas for improvement.`,
     
      `I meticulously documented the fabrication steps and testing procedures to ensure repeatability of the process and to support iterative improvements in the sensor design. This data is invaluable for refining the sensor’s performance and ensuring reliability in future iterations.`,
    ],
  },
  {
    title: 'Controlling Projector using Raspberry Pi',
    description: `Developed a custom Linux device driver to automate projector control based on HDMI connection status using Raspberry Pi.`,
    tags: ['Linux Device Driver', 'Raspberry Pi', 'Embedded Systems', 'HDMI', 'EDID', 'Mailbox Interface'],
    imageUrl: accountingImg, // Replace with your actual image reference
    link: '', // Add GitHub or project documentation link if available
    detailedDescription: [
      `This project involved building a Linux device driver on Raspberry Pi to automatically control a projector based on HDMI cable connection status. The goal was to streamline projector usage in embedded setups by eliminating the need for manual on/off switching.`,
  
      `The driver uses the Raspberry Pi’s mailbox interface to communicate directly with the VideoCore GPU, enabling retrieval of Extended Display Identification Data (EDID). By analyzing the EDID, the system can distinguish whether a projector or a standard monitor is connected.`,
  
      `Based on this information, the driver triggers an automatic response — powering on the projector when a connection is detected, and switching it off when disconnected. This improves energy efficiency and simplifies setup for smart AV environments.`,
  
      `The project demonstrates low-level hardware-software integration and effective use of Raspberry Pi interfaces for device automation in embedded systems, with potential applications in smart classrooms, conference rooms, or remote-controlled setups.`
    ],
    extraImg: [accountingImg, accountingImg] // Replace with actual visuals
  },
  {
    title: 'Adding Real-Time Capabilities to Linux using RTAI',
    description: `Analyzed and enhanced the real-time performance of Linux using RTAI, comparing real-time tasks with standard user processes under varying system conditions.`,
    tags: ['RTAI', 'Linux Kernel', 'Real-Time Systems', 'LTTng', 'System Performance', 'Task Scheduling'],
    imageUrl: accountingImg, // Replace with actual image reference
    link: '', // Add GitHub or technical report link if available
    detailedDescription: [
      `This project focused on augmenting the Linux operating system with real-time capabilities using the Real-Time Application Interface (RTAI). The objective was to evaluate how real-time tasks behave under different system conditions and how they compare to standard Linux user processes.`,
  
      `To carry out this evaluation, I implemented a set of real-time tasks using RTAI and conducted a comparative analysis against normal user-space processes. Various system parameters were varied during testing — including task priority, system load, and scheduling strategies — to examine their impact on task execution latency and predictability.`,
  
      `Performance metrics and execution traces were collected using the LTTng (Linux Trace Toolkit next generation), which provided detailed insights into task scheduling, execution timing, and interrupt handling. The results highlighted the advantages of real-time scheduling in meeting deterministic deadlines, especially under high system load.`,
  
      `This project demonstrated a clear understanding of real-time kernel extensions, Linux internals, and system performance instrumentation. It is useful for applications in industrial control, robotics, and embedded systems where timing precision is critical.`
    ],
    extraImg: [accountingImg, accountingImg] // Replace with your own visuals
  },
  {
    title: 'Vertebral Vest',
    description: `Designed a wearable motion-tracking vest to help doctors monitor and analyze spinal movement throughout treatment using embedded sensors and 3D visualization tools.`,
    tags: ['Wearable Tech', 'Intel Edison', 'MPU6050', 'Motion Tracking', 'Healthcare', 'Blender'],
    imageUrl: accountingImg, // Replace with your actual image reference
    link: '', // Add GitHub or project documentation link if available
    detailedDescription: [
      `The Vertebral Vest project focused on creating a wearable device that assists medical professionals in tracking spinal or torso movement during the rehabilitation or treatment of musculoskeletal conditions. The system helps monitor a patient’s recovery by continuously capturing and analyzing posture and movement over time.`,
  
      `The device was built using an Intel Edison microcontroller platform combined with an MPU6050 inertial measurement unit (IMU), which integrates a 3-axis gyroscope and 3-axis accelerometer. The sensor data was used to compute body orientation and movement in real-time.`,
  
      `To visualize the collected motion data, the system interfaced with Blender, a 3D graphics software, allowing recorded body movements to be rendered as animations. This provided physicians with an intuitive, visual tool to assess rehabilitation progress, compare before-and-after movement patterns, and make more informed treatment decisions.`,
  
      `The Vertebral Vest provides a non-invasive, real-time monitoring solution that supports personalized care and enhances doctor-patient interaction. Its integration of embedded systems with motion analytics and visualization bridges the gap between medical diagnostics and wearable technology.`
    ],
    extraImg: [accountingImg, accountingImg] // Replace with actual visuals
  },    
  {
    title: 'Virtual Bowling',
    description: `Created an interactive bowling game that captures real-world hand motion using sensor-equipped gloves to simulate a realistic bowling experience.`,
    tags: ['C#', 'XNA Framework', 'Motion Sensing', 'Game Development', 'Human-Computer Interaction'],
    imageUrl: accountingImg, // Replace with your actual image reference
    link: '', // Add GitHub or demo video link if available
    detailedDescription: [
      `Virtual Bowling is a motion-controlled game designed to replicate the physical experience of bowling using sensor-equipped gloves. The project aimed to bridge the gap between physical movement and digital interaction, providing users with an immersive and realistic sports simulation.`,
  
      `The system used motion sensors embedded in wearable gloves to detect hand orientation, speed, and throwing gestures. These physical attributes were then mapped to in-game mechanics to control the bowling ball's trajectory, speed, and spin, closely mimicking real-life gameplay.`,
  
      `The game was developed using C# and Microsoft’s XNA Framework, which provided a robust platform for building interactive 2D and 3D games. The physics engine was fine-tuned to respond to subtle motion inputs, enhancing realism and responsiveness.`,
  
      `This project combined principles of human-computer interaction, real-time motion tracking, and game development to deliver a novel entertainment experience. It demonstrates how embedded sensors can be used to create engaging virtual environments that react naturally to user movements.`
    ],
    extraImg: [accountingImg, accountingImg] // Replace with real visuals
  },
  {
    title: 'Clip-On Touchscreen Enabler',
    description: `Designed a low-cost prototype system that converts any flat surface into a touch-enabled interface using ultrasonic sensing and embedded processing.`,
    tags: ['Ultrasonic Sensors', 'MSP430', 'Touch Interface', 'Human-Computer Interaction', 'Embedded Systems'],
    imageUrl: accountingImg, // Replace with your actual image reference
    link: '', // Add GitHub or documentation link if available
    detailedDescription: [
      `The Clip-On Touchscreen Enabler project focused on developing a cost-effective system that could transform any flat or ordinary surface into a touch-sensitive interface. The idea was to provide an accessible alternative to expensive touchscreen technologies, particularly for educational, interactive, or assistive applications.`,
  
      `The prototype utilized ultrasonic sensors to detect finger position and motion on the surface. These sensors were strategically positioned to triangulate the touch point based on the time-of-flight of ultrasonic signals, enabling real-time touch tracking with reasonable accuracy.`,
  
      `An MSP430 microcontroller was used to handle sensor data acquisition, signal processing, and basic gesture recognition. It translated the positional data into usable inputs for further interaction, such as simulating mouse movement or triggering specific actions.`,
  
      `This innovative system demonstrated how simple hardware components and signal processing can be combined to build intuitive and interactive interfaces. Its portable and clip-on form factor makes it versatile for a range of surfaces and environments, paving the way for low-cost touch interaction in resource-limited settings.`
    ],
    extraImg: [accountingImg, accountingImg] // Replace with actual images
  },
  {
    title: 'Electronic Drum Kit',
    description: `Built a low-cost electronic drum kit using piezoelectric sensors and an AVR microcontroller, interfaced with FL Studio for real-time sound generation.`,
    tags: ['AVR Microcontroller', 'Piezoelectric Sensors', 'FL Studio', 'Embedded Systems', 'MIDI'],
    imageUrl: accountingImg, // Replace with your actual image reference
    link: '', // Add GitHub, demo video, or technical documentation link if available
    detailedDescription: [
      `The Electronic Drum Kit project involved creating a digital percussion instrument using piezoelectric sensors mounted on drum pads to detect strikes. These sensors generate voltage signals upon impact, allowing for the capture of timing and intensity of drum hits.`,
  
      `An AVR microcontroller was used to process the sensor signals. It performed analog-to-digital conversion, filtered the data to reduce noise, and interpreted the strike intensity to generate corresponding MIDI signals. These signals were then transmitted to a PC via serial or USB interface.`,
  
      `On the PC side, FL Studio—a digital audio workstation—was used to map the MIDI signals to various drum sounds, enabling a real-time drumming experience. The system supported multiple pads and could detect varying strike force to simulate dynamic drumming.`,
  
      `This project combined embedded system design with digital music production, offering a compact and affordable alternative to commercial electronic drum kits. It demonstrated how physical interaction can be captured and translated into expressive digital audio through smart sensor integration and real-time signal processing.`
    ],
    extraImg: [accountingImg, accountingImg] // Replace with your own images
  },
  {
    title: 'SAVI – Shopping Assistant for Visually Impaired',
    description: `Designed a wearable system to assist visually impaired individuals in shopping by enabling product description readout through a smartphone interface.`,
    tags: ['Wearable Tech', 'Assistive Technology', 'OCR', 'Embedded Systems', 'Bluetooth Communication'],
    imageUrl: accountingImg, // Replace with your actual image reference
    link: '', // Add GitHub, demo video, or documentation link if available
    detailedDescription: [
      `SAVI (Shopping Assistant for Visually Impaired) is a wearable band developed to help visually impaired individuals navigate shopping environments independently. The goal was to provide an intuitive and reliable way for users to identify products and understand their descriptions without relying on external help.`,
  
      `The system works by scanning the product label using a smartphone camera. The wearable band is equipped with a button or gesture input that triggers the phone to capture the product image. Optical Character Recognition (OCR) is then used to extract text from the label, such as brand, ingredients, or price.`,
  
      `This text is converted to speech and read aloud to the user through the phone’s speaker or connected earphones, offering real-time auditory feedback. The wearable communicates with the smartphone wirelessly, ensuring hands-free interaction throughout the shopping experience.`,
  
      `SAVI showcases the potential of integrating embedded systems, OCR, and voice output to create impactful assistive technology. It promotes greater independence for visually impaired individuals and enhances their ability to make informed choices while shopping.`
    ],
    extraImg: [accountingImg, accountingImg] // Replace with actual visuals
  }  
  
  
] as const;

export const skillsData = [
{
  title:'Embedded Systems',
  tags:[
    'FreeRTOS',
     'GDB', 
     'Buildroot', 
     'Linux device drivers', 
     'Firmware development', 
     'RTOS concepts', 
     'Baremetal' 
  ]
},
{
  title:'Hardware',
  tags: [
    'ARM Architecture', 
    'Silicon Labs', 
    'Raspberry Pi',
    'Intel Edison', 
    'Arduino', 
    'Microcontrollers', 
    'ADC', 
    'DAC',
    'Op-Amps', 
    'boost/buck converters', 
    'Multiplexers', 
    'Semiconductor devices', 
    'System/Board Design', 
    'Board bring up', 
    'Power budgeting', 
    'Hardware automation'

  ],
},
{
  title:'PCB Design',
  tags: [
    'Eagle', 
    'Rigid PCB',
    'Flexible PCB',
    'Pick & Place',
    'Assembly',
    'Debugging',
    'X-Ray Diagnostics'
  ],
},
{
  title:'Communication Protocols',
  tags: [
    'Zigbee',
     'BLE', 
     'I2C', 
     'SPI', 
     'UART', 
     'RS-485', 
     'Modbus', 
     'BACnet'
  ],
},
{title:'Fabrication',
tags: [
  'Micro-Electro Discharge Machining',
  'Additive Manufacturing',
  'Polymer Molding & Casting',
  'Electropolishing',
  'Dip Coating',
  'Photolithography',
  'Etching',
  'Anodic Bonding',
  'E-beam Evaporation',
  'Thin Film Deposition' ],
},
{
title:'Characterization Tools and Equipments',
tags: [
  'Scanning Electron Microscopy (SEM)',
  'Optical Microscopy',
  'X-ray Diagnostics',
 'Surface Profilometry',
 'Oscilloscope', 
 'Function generator', 
 'DMM', 
 'Logic analyzer'
],
},
{
  title:'Programming and Scripting',
  tags: [
    'C',
    'C++', 
    'Python', 
    'shell', 
    'assembly', 
    'Valgrind', 
    'VHDL', 
    'Verilog', 
    'MAGIC'],
  },
    {
      title:'Softwares',
      tags: [
        'SolidWorks',
        'AutoCAD',
        'COMSOL Multiphysics',
        'MATLAB',
        'JMP',
        'NI Multisim',
        'Eagle',
        'Magic',
        'ModelSim',
        'Xilinx',
        'Proteus',
        'MS Office Suite'],
    },
] as const;
