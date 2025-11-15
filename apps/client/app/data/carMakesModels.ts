// Car Makes and Models Data
// Excluded: Rare models and excluded models as per insurance policy
export const carMakesModels: { [key: string]: string[] } = {
  'Toyota': [
    'Corolla', 'Camry', 'RAV4', 'Highlander', 'Land Cruiser', 'Prado', 'Hilux', 'Fortuner',
    'Yaris', 'Avensis', 'Prius', 'Premio', 'Allion'
  ],
  'Nissan': [
    'Altima', 'Sentra', 'Rogue', 'Pathfinder', 'X-Trail', 'Patrol', 'Navara',
    'March', 'Sunny', 'Almera', 'Murano', 'Qashqai', 'Juke', 'Leaf'
  ],
  'Mazda': [
    'Mazda3', 'Mazda6', 'CX-5', 'CX-9', 'CX-3', 'MX-5', 'Atenza',
    'Tribute', 'BT-50', 'CX-30', 'CX-8'
  ],
  'Honda': [
    'Civic', 'Accord', 'CR-V', 'Pilot', 'City', 'HR-V', 'Odyssey', 'Ridgeline',
    'Insight', 'Passport'
  ],
  'Mercedes-Benz': [
    'C-Class', 'E-Class', 'S-Class', 'A-Class', 'GLE', 'GLC', 'GLS', 'CLA', 'CLS',
    'G-Class', 'AMG GT', 'SL', 'GLB', 'EQC'
  ],
  'BMW': [
    '3 Series', '5 Series', '7 Series', 'X1', 'X3', 'X5', 'X7', '1 Series', '2 Series',
    '4 Series', '6 Series', 'X2', 'X4', 'X6', 'Z4', 'iX'
  ],
  'Subaru': [
    'Outback', 'Forester', 'Impreza', 'Legacy', 'XV', 'WRX', 'Ascent', 'Crosstrek'
  ],
  'Ford': [
    'Focus', 'Fusion', 'Explorer', 'Escape', 'Edge', 'Ranger',
    'F-150', 'Expedition', 'Bronco', 'EcoSport'
  ],
  'Hyundai': [
    'Sonata', 'Tucson', 'Santa Fe', 'Accent', 'Veloster', 'Kona',
    'Venue', 'Nexo', 'Ioniq'
  ],
  'Kia': [
    'Rio', 'Forte', 'Optima', 'Sorento', 'Sportage', 'Soul', 'Telluride', 'Stinger',
    'Seltos', 'Niro', 'EV6'
  ],
  'Mitsubishi': [
    'Outlander', 'Lancer', 'Pajero', 'ASX', 'Eclipse Cross', 'Mirage', 'Triton',
    'Montero', 'Galant'
  ],
  'Suzuki': [
    'Vitara', 'SX4', 'Grand Vitara', 'Jimny', 'Baleno', 'Celerio', 'Ertiga',
    'S-Cross', 'Ignis'
  ],
  'Isuzu': [
    'D-Max', 'MU-X', 'Trooper', 'Rodeo', 'KB', 'NPR', 'FVR', 'Giga'
  ],
  'Peugeot': [
    '208', '308', '508', '3008', '5008', '2008', 'Partner', 'Expert', 'Boxer'
  ],
  'Renault': [
    'Clio', 'Captur', 'Kadjar', 'Duster', 'Koleos', 'Talisman', 'Kwid',
    'Logan', 'Sandero'
  ],
  'Chevrolet': [
    'Cruze', 'Malibu', 'Equinox', 'Tahoe', 'Silverado', 'Traverse', 'Trax', 'Camaro',
    'Corvette', 'Spark'
  ],
  'Audi': [
    'A3', 'A4', 'A6', 'A8', 'Q3', 'Q5', 'Q7', 'TT', 'R8', 'e-tron', 'A5', 'A7'
  ],
  'Lexus': [
    'ES', 'IS', 'GS', 'LS', 'RX', 'NX', 'GX', 'LX', 'UX', 'RC', 'LC'
  ],
  'Volvo': [
    'XC40', 'XC60', 'XC90', 'S60', 'S90', 'V40', 'V60', 'V90', 'C30', 'XC70'
  ],
  'Land Rover': [
    'Range Rover', 'Range Rover Sport', 'Range Rover Evoque', 'Discovery', 'Defender',
    'Discovery Sport', 'Velar'
  ],
  'Jeep': [
    'Wrangler', 'Grand Cherokee', 'Cherokee', 'Compass', 'Renegade', 'Gladiator',
    'Wagoneer', 'Grand Wagoneer'
  ],
  'GMC': [
    'Sierra', 'Yukon', 'Acadia', 'Terrain', 'Canyon', 'Savana', 'Envoy'
  ],
  'Chrysler': [
    '300', 'Pacifica', 'Voyager', 'Aspen'
  ],
  'Jaguar': [
    'XE', 'XF', 'XJ', 'F-Pace', 'E-Pace', 'I-Pace', 'F-Type'
  ],
  'Porsche': [
    'Cayenne', 'Macan', 'Boxster', 'Cayman', 'Taycan'
  ],
  'Infiniti': [
    'Q60', 'Q70', 'QX50', 'QX60', 'QX80', 'QX30'
  ],
  'Acura': [
    'ILX', 'TLX', 'RLX', 'RDX', 'MDX', 'NSX', 'CDX'
  ],
  'Mini': [
    'Cooper', 'Countryman', 'Clubman', 'Paceman', 'Roadster', 'Coupe'
  ],
  'SEAT': [
    'Ibiza', 'Leon', 'Ateca', 'Tarraco', 'Arona', 'Formentor'
  ],
  'Other': []
}

export const carMakes = Object.keys(carMakesModels).sort()
