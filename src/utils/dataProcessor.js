export const processData = (data) => {

  const yearMap = new Map();
  const cropMap = new Map();


  data.forEach(({ "Year": year, "Crop Name": crop, "Crop Production (UOM:t(Tonnes))": production, "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": yieldKgHa, "Area Under Cultivation (UOM:Ha(Hectares))": area }) => {
   
    production = production === "" ? 0 : Number(production);
    yieldKgHa = yieldKgHa === "" ? 0 : Number(yieldKgHa);
    area = area === "" ? 0 : Number(area);

  
    if (!yearMap.has(year)) {
      yearMap.set(year, { maxCrop: crop, maxProduction: production, minCrop: crop, minProduction: production });
    } else {
      const yearData = yearMap.get(year);
      if (production > yearData.maxProduction) {
        yearData.maxCrop = crop;
        yearData.maxProduction = production;
      }
      if (production < yearData.minProduction) {
        yearData.minCrop = crop;
        yearData.minProduction = production;
      }
    }

  
    if (!cropMap.has(crop)) {
      cropMap.set(crop, { totalYield: yieldKgHa, totalArea: area, count: 1 });
    } else {
      const cropData = cropMap.get(crop);
      cropData.totalYield += yieldKgHa;
      cropData.totalArea += area;
      cropData.count += 1;
    }
  });


  const aggregated = Array.from(yearMap.entries()).map(([year, { maxCrop, minCrop }]) => ({
    year,
    maxCrop,
    minCrop,
  }));

  const averages = Array.from(cropMap.entries()).map(([crop, { totalYield, totalArea, count }]) => ({
    crop,
    avgYield: parseFloat((totalYield / count).toFixed(3)),
    avgArea: parseFloat((totalArea / count).toFixed(3)),
  }));

  return { aggregated, averages };
};