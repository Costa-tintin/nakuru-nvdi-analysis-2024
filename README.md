# nakuru-nvdi-analysis-2024
NDVI-based crop stress analysis for Nakuru Region, Kenya
Nakuru Region Crop Stress Analysis Using NDVI

Project Overview
This repository contains a comprehensive analysis of crop health and stress in the Nakuru region of Kenya using Normalized Difference Vegetation Index (NDVI). The analysis utilizes Sentinel-2 satellite imagery processed through Google Earth Engine (GEE) and QGIS to identify areas of crop stress and healthy vegetation.

Key Findings
45% of croplands show signs of severe stress (red zones)
40% of agricultural areas exhibit moderate stress conditions (yellow zones)
Only 15% of croplands display optimal plant health (green zones)
Western sectors show the highest concentration of severely stressed vegetation
Eastern zones demonstrate better overall plant health with patches of healthy vegetation
Technologies Used
Google Earth Engine (GEE): Cloud-based platform for satellite image processing and NDVI calculation
QGIS: Geospatial analysis and map production
Sentinel-2 Satellite Data: 10m resolution multispectral imagery (Feb-Apr 2024)
Repository Structure
nakuru-ndvi-analysis-2024/
├── README.md               # This file - project overview
├── data/                   # Data directory
│   ├── raw/                # Raw Sentinel-2 data access information
│   └── processed/          # Processed NDVI GeoTIFF files
├── docs/                   # Documentation folder
│   ├── report.md           # Full analytical report
│   └── images/             # Maps and visualizations
├── code/                   # Analysis code
│   ├── gee/                # Google Earth Engine JavaScript code
│   └── qgis/               # QGIS processing workflow
└── results/                # Final maps and statistical outputs
Methodology
The analysis follows a systematic workflow:

Data Acquisition: Sentinel-2 Surface Reflectance (SR) collection filtered for:
Date range: February 1, 2024 - April 30, 2024
Cloud cover: <10%
Region: Nakuru administrative boundary
NDVI Calculation: Using NIR (Band 8) and Red (Band 4)
NDVI = (NIR - Red) / (NIR + Red)
Stress Classification:
Red (0.0-0.3): Severe stress/sparse vegetation
Yellow (0.3-0.6): Moderate stress/developing vegetation
Green (0.6-1.0): Healthy vegetation
Spatial Analysis: Pattern identification and quantification using QGIS
Key Visualizations
NDVI Distribution Map


Stress Level Distribution

Agricultural Implications
The analysis reveals concerning patterns of crop stress that could impact agricultural productivity:

Western areas may require immediate irrigation interventions
Central regions show variable stress patterns suggesting differential farm management
Eastern zones demonstrate more resilient agricultural practices
Applications for Precision Agriculture
This analysis provides valuable insights for:

Targeted irrigation planning in high-stress zones
Fertilizer application optimization based on vegetation health
Pest and disease risk assessment in vulnerable areas
Yield prediction and harvest planning based on current crop conditions
Agricultural extension service deployment prioritization
Geofencing Applications
The NDVI analysis can be integrated with geofencing technology to:

Automated Alerts: Generate notifications when specific fields drop below critical NDVI thresholds
Zone-Based Management: Create management zones based on stress patterns
Mobile Applications: Push notifications to farmers when their fields need attention
Irrigation Control: Automate irrigation systems based on real-time stress detection
Field Monitoring: Track unauthorized access to high-value crop areas
How to Use This Repository
Prerequisites
Google Earth Engine account
QGIS (3.22 or later)
Basic knowledge of remote sensing concepts
Reproducing the Analysis
Clone this repository
bash
git clone https://github.com/Costa-tintin/nakuru-ndvi-analysis-2024.git
cd nakuru-ndvi-analysis-2024
Run the GEE code
Open Google Earth Engine Code Editor
Copy the code from code/gee/ndvi_analysis.js
Update the Area of Interest (AOI) if needed
Run the script to process Sentinel-2 data and calculate NDVI
For detailed QGIS processing:
Open the QGIS project file in code/qgis/
Follow the workflow documentation in docs/qgis_workflow.md
Extending This Work
Future analysis could include:

Multi-temporal assessment across growing seasons
Integration with weather data for correlation analysis
Comparison with agricultural yield data
Addition of other vegetation indices (EVI, SAVI, etc.)
About the Author
Constantine is a geospatial analyst specializing in agricultural remote sensing and precision farming applications. With expertise in satellite image processing, GIS analysis, and geofencing solutions, Constantine provides actionable insights for agricultural stakeholders.

Contact & Services
For inquiries about:

Custom agricultural monitoring systems
Geofencing solutions for farm management
Remote sensing analysis for crop assessment
Training in GEE and QGIS for agricultural applications
Contact: costamutinda23@gmail.com

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Sentinel-2 data provided by the European Space Agency (ESA)
Google Earth Engine for cloud computing resources
QGIS Development Team for the open-source GIS software
Nakuru County Agricultural Office for regional information
Last updated: May 19, 2025


