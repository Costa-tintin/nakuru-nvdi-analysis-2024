// STEP 1: Define AOI (drawn or uploaded)
 // Change this or import your shapefile

// STEP 2: Load Sentinel-2 SR ImageCollection
var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
  .filterBounds(nakuru)
  .filterDate('2024-02-01', '2024-04-30')
  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 10))
  .median(); // Take median composite

// STEP 3: Compute NDVI
var ndvi = s2.normalizedDifference(['B8', 'B4']).rename('NDVI');

// STEP 4: NDVI Visualization Parameters
var ndviVis = {
  min: 0.0,
  max: 1.0,
  palette: ['red', 'yellow', 'green']
};

Map.centerObject(nakuru, 12);
Map.addLayer(ndvi.clip(nakuru), ndviVis, 'NDVI (Feb-Apr 2024)');

// STEP 5: Export NDVI to GeoTIFF (for QGIS)
Export.image.toDrive({
  image: ndvi.clip(nakuru),
  description: 'NDVI_Maize_Nakuru_2024',
  folder: 'GEE_Exports',
  fileNamePrefix: 'NDVI_Nakuru',
  region: nakuru,
  scale: 10,
  crs: 'EPSG:4326',
  maxPixels: 1e13
});
