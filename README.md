# Indian Agriculture Data Analysis

This project analyzes Indian Agriculture data provided by the National Data and Analytics Platform, NITI Aayog. It aggregates crop data and displays it as tables using Mantine v7 components.
Data Fetch URL  - https://drive.google.com/file/d/1p1UW__9DvRuscA01kUFTMz_CUMKvTbyM/view

## Project Setup

To run the project locally, follow these steps:

1. Clone the repository to your local machine:
   git clone <repository_url>
   
2. Navigate to the project directory:
   cd indian-agriculture-data-analysis

3. Install dependencies using Yarn:
   yarn install

4. Start the development server:
   yarn start


## File Structure

indian-agriculture-data-analysis/
├── src/
│   ├── components/
│   │   └── DataTables.js
│   ├── utils/
│   │   └── dataProcessor.js
│   ├── App.js
│   └── index.js
├── data.js
└── README.md


## Components
1. DataTables.js
This file contains the DataTables component, which displays aggregated crop data as tables.

2. utils/dataProcessor.js
This file contains the processData function, which processes the raw data and aggregates it into tables.