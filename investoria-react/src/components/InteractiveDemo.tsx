import { useState, useEffect } from 'react';

type TileType = 'empty' | 'building' | 'terrain' | 'pet';
type GameStep = 'building' | 'terrain' | 'pet' | 'complete';

interface GridTile {
  type: TileType;
  id: string | null;
  data?: any;
}

interface StockBuilding {
  id: string;
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  emoji: string;
  color: string;
  investment: string;
  currentValue: string;
  lineGraph: string;
  sectorInfo: {
    description: string;
    marketCap: string;
    ytdReturn: string;
    topStocks: Array<{
      name: string;
      symbol: string;
      price: string;
      change: string;
    }>;
    insights: Array<{
      title: string;
      content: string;
    }>;
  };
}

interface TerrainItem {
  id: string;
  name: string;
  emoji: string;
}

interface Pet {
  id: string;
  name: string;
  emoji: string;
}

export default function InteractiveDemo() {
  const [grid, setGrid] = useState<GridTile[]>(
    Array(9).fill(null).map(() => ({ type: 'empty', id: null }))
  );
  const [currentStep, setCurrentStep] = useState<GameStep>('building');
  const [flippedTile, setFlippedTile] = useState<number | null>(null);
  const [placedBuilding, setPlacedBuilding] = useState(false);
  const [placedTerrain, setPlacedTerrain] = useState(false);
  const [placedPet, setPlacedPet] = useState(false);
  const [terrainCount, setTerrainCount] = useState(0);
  const [cityLifeCount, setCityLifeCount] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{item: any, type: TileType} | null>(null);

  // Auto-complete when grid is completely filled
  useEffect(() => {
    const filledTiles = grid.filter(tile => tile.type !== 'empty').length;
    if (filledTiles === 9 && currentStep !== 'complete') {
      const timer = setTimeout(() => setCurrentStep('complete'), 500);
      return () => clearTimeout(timer);
    }
  }, [grid, currentStep]);

  const stockBuildings: StockBuilding[] = [
    {
      id: 'financial',
      symbol: 'XLF',
      name: 'Financial',
      price: '$28.75',
      change: '+0.45',
      changePercent: '+1.59%',
      emoji: './bank_level1.png',
      color: 'from-blue-400 to-blue-600',
      investment: '$200.00',
      currentValue: '$215.00',
      lineGraph: '0,65 30,62 60,58 90,55 120,52 150,48 180,45 210,42 240,38 270,35 300,32',
      sectorInfo: {
        description: 'The financial sector includes banks, investment firms, insurance companies, and real estate companies. These institutions provide essential services like lending, investment management, and risk protection.',
        marketCap: '$890B',
        ytdReturn: '+12.3%',
        topStocks: [
          { name: 'JPMorgan Chase', symbol: 'JPM', price: '$145.67', change: '+1.2%' },
          { name: 'Bank of America', symbol: 'BAC', price: '$32.18', change: '+0.8%' },
          { name: 'Wells Fargo', symbol: 'WFC', price: '$42.91', change: '+1.5%' }
        ],
        insights: [
          { title: 'Interest Rate Environment', content: 'Rising interest rates generally benefit banks by increasing net interest margins and profitability.' },
          { title: 'Digital Banking Growth', content: 'Financial institutions are investing heavily in digital platforms and fintech partnerships.' },
          { title: 'Credit Quality', content: 'Banks maintain strong balance sheets with healthy loan loss reserves and capital ratios.' }
        ]
      }
    },
    {
      id: 'energy',
      symbol: 'XLE',
      name: 'Energy',
      price: '$24.00',
      change: '+0.60',
      changePercent: '+2.56%',
      emoji: './energy_level1.png',
      color: 'from-orange-400 to-orange-600',
      investment: '$250.00',
      currentValue: '$300.00',
      lineGraph: '0,75 30,70 60,72 90,68 120,65 150,67 180,62 210,58 240,60 270,55 300,50',
      sectorInfo: {
        description: 'The energy sector includes companies involved in the exploration, production, and distribution of oil, gas, and renewable energy. This sector is essential for powering economies worldwide and includes both traditional fossil fuel companies and emerging clean energy technologies.',
        marketCap: '$1.2T',
        ytdReturn: '+8.5%',
        topStocks: [
          { name: 'Exxon Mobil', symbol: 'XOM', price: '$118.45', change: '+2.8%' },
          { name: 'Chevron Corp', symbol: 'CVX', price: '$164.22', change: '+1.9%' },
          { name: 'ConocoPhillips', symbol: 'COP', price: '$109.88', change: '+3.2%' }
        ],
        insights: [
          { title: 'Oil Demand Recovery', content: 'Global oil demand is expected to continue recovering as travel increases post-pandemic.' },
          { title: 'Clean Energy Transition', content: 'Many energy companies are investing heavily in renewable energy and carbon reduction technologies.' },
          { title: 'Dividend Yields', content: 'Energy sector offers some of the highest dividend yields in the market, averaging 4-6%.' }
        ]
      }
    },
    {
      id: 'healthcare',
      symbol: 'XLV',
      name: 'Healthcare',
      price: '$31.50',
      change: '-0.25',
      changePercent: '-0.79%',
      emoji: './hospital_level1.png',
      color: 'from-red-400 to-red-600',
      investment: '$180.00',
      currentValue: '$195.00',
      lineGraph: '0,45 30,48 60,52 90,49 120,46 150,43 180,40 210,44 240,41 270,38 300,35',
      sectorInfo: {
        description: 'Healthcare encompasses pharmaceutical companies, medical device manufacturers, hospitals, and biotechnology firms. This defensive sector benefits from aging populations and continuous medical innovation.',
        marketCap: '$2.1T',
        ytdReturn: '+15.2%',
        topStocks: [
          { name: 'Johnson & Johnson', symbol: 'JNJ', price: '$162.34', change: '+0.5%' },
          { name: 'Pfizer Inc', symbol: 'PFE', price: '$28.91', change: '-0.3%' },
          { name: 'UnitedHealth Group', symbol: 'UNH', price: '$524.67', change: '+1.1%' }
        ],
        insights: [
          { title: 'Aging Demographics', content: 'An aging global population drives sustained demand for healthcare services and products.' },
          { title: 'Medical Innovation', content: 'Breakthrough treatments in cancer, rare diseases, and personalized medicine create growth opportunities.' },
          { title: 'Defensive Characteristics', content: 'Healthcare stocks often outperform during economic uncertainty due to consistent demand.' }
        ]
      }
    },
    {
      id: 'industrial',
      symbol: 'XLI',
      name: 'Industrial',
      price: '$26.85',
      change: '+0.35',
      changePercent: '+1.32%',
      emoji: './industry_level2.png',
      color: 'from-gray-400 to-gray-600',
      investment: '$220.00',
      currentValue: '$240.00',
      lineGraph: '0,70 30,68 60,65 90,63 120,60 150,58 180,55 210,53 240,50 270,48 300,45',
      sectorInfo: {
        description: 'Industrial companies manufacture machinery, equipment, and provide services essential to economic infrastructure. This includes aerospace, construction, transportation, and manufacturing companies.',
        marketCap: '$1.5T',
        ytdReturn: '+18.7%',
        topStocks: [
          { name: 'Caterpillar Inc', symbol: 'CAT', price: '$289.45', change: '+2.1%' },
          { name: 'Boeing Company', symbol: 'BA', price: '$198.76', change: '+1.8%' },
          { name: 'General Electric', symbol: 'GE', price: '$112.33', change: '+0.9%' }
        ],
        insights: [
          { title: 'Infrastructure Spending', content: 'Government infrastructure investments drive demand for industrial equipment and services.' },
          { title: 'Supply Chain Recovery', content: 'Industrial companies are benefiting from supply chain normalization and inventory restocking.' },
          { title: 'Automation Trends', content: 'Increasing automation and digitalization create opportunities for industrial technology companies.' }
        ]
      }
    },
    {
      id: 'commercial',
      symbol: 'XLY',
      name: 'Consumer',
      price: '$22.90',
      change: '+0.75',
      changePercent: '+3.38%',
      emoji: './market_level2.png',
      color: 'from-green-400 to-green-600',
      investment: '$300.00',
      currentValue: '$285.00',
      lineGraph: '0,80 30,78 60,75 90,73 120,70 150,68 180,65 210,63 240,60 270,58 300,55',
      sectorInfo: {
        description: 'Consumer discretionary includes retailers, restaurants, hotels, and entertainment companies. These businesses depend on consumer spending and economic confidence for growth.',
        marketCap: '$1.8T',
        ytdReturn: '+22.1%',
        topStocks: [
          { name: 'Amazon.com Inc', symbol: 'AMZN', price: '$142.87', change: '+2.3%' },
          { name: 'Tesla Inc', symbol: 'TSLA', price: '$248.91', change: '+4.1%' },
          { name: 'Home Depot Inc', symbol: 'HD', price: '$334.22', change: '+1.2%' }
        ],
        insights: [
          { title: 'E-commerce Growth', content: 'Online retail continues to gain market share, accelerated by changing consumer habits.' },
          { title: 'Consumer Confidence', content: 'Strong employment and wage growth support discretionary spending across categories.' },
          { title: 'Experience Economy', content: 'Consumers increasingly prioritize experiences over goods, benefiting travel and entertainment sectors.' }
        ]
      }
    },
    {
      id: 'materials',
      symbol: 'XLB',
      name: 'Materials',
      price: '$19.40',
      change: '+0.15',
      changePercent: '+0.78%',
      emoji: './mine_level2.png',
      color: 'from-yellow-400 to-yellow-600',
      investment: '$160.00',
      currentValue: '$170.00',
      lineGraph: '0,85 30,82 60,80 90,78 120,75 150,73 180,70 210,68 240,65 270,63 300,60',
      sectorInfo: {
        description: 'Materials companies extract, process, and manufacture raw materials including metals, chemicals, forestry products, and mining commodities essential for construction and manufacturing.',
        marketCap: '$750B',
        ytdReturn: '+6.8%',
        topStocks: [
          { name: 'Linde plc', symbol: 'LIN', price: '$398.45', change: '+1.1%' },
          { name: 'Sherwin-Williams', symbol: 'SHW', price: '$267.89', change: '+0.7%' },
          { name: 'Newmont Corp', symbol: 'NEM', price: '$41.23', change: '+2.4%' }
        ],
        insights: [
          { title: 'Commodity Cycles', content: 'Materials stocks are sensitive to global economic growth and commodity price fluctuations.' },
          { title: 'Green Transition', content: 'Demand for lithium, copper, and rare earth metals is growing due to renewable energy adoption.' },
          { title: 'Infrastructure Demand', content: 'Global infrastructure projects drive sustained demand for construction materials and chemicals.' }
        ]
      }
    }
  ];

  const terrainItems: TerrainItem[] = [
    { id: 'pinktree', name: 'Pink Tree', emoji: './pinktree.png' },
    { id: 'redtree', name: 'Red Tree', emoji: './redtree.png' },
    { id: 'willowtree', name: 'Willow Tree', emoji: './willowtree.png' },
    { id: 'redflowers', name: 'Red Flowers', emoji: './redflowers.png' },
    { id: 'whiteflowers', name: 'White Flowers', emoji: './whiteflowers.png' },
    { id: 'purpleflowers', name: 'Purple Flowers', emoji: './purpleflowers.png' }
  ];

  const pets: Pet[] = [
    { id: 'dog', name: 'Dog', emoji: './dog.png' },
    { id: 'cat', name: 'Cat', emoji: './cat.png' },
    { id: 'squirrel', name: 'Squirrel', emoji: './squirrel.png' },
    { id: 'fountain', name: 'Fountain', emoji: './fountain.png' },
    { id: 'bench', name: 'Bench', emoji: './bench_standard.png' },
    { id: 'juice', name: 'Juice Stand', emoji: './juice.png' }
  ];


  const handleItemSelect = (item: any, type: TileType) => {
    setSelectedItem({ item, type });
  };

  const handleTileClick = (gridIndex: number) => {
    const tile = grid[gridIndex];
    
    // If clicking a building tile, flip it to show stock info
    if (tile.type === 'building') {
      setFlippedTile(flippedTile === gridIndex ? null : gridIndex);
      return;
    }
    
    // If we have a selected item and tile is empty, place it
    if (selectedItem && tile.type === 'empty') {
      handlePlacement(gridIndex, selectedItem.item, selectedItem.type);
      setSelectedItem(null); // Clear selection after placement
    }
  };

  const handlePlacement = (gridIndex: number, item: any, itemType: TileType) => {
    // Buildings can only go in center (index 4)
    if (itemType === 'building' && gridIndex !== 4) return;
    
    const newGrid = [...grid];
    newGrid[gridIndex] = {
      type: itemType,
      id: item.id,
      data: item
    };

    // If placing building, also place road
    if (itemType === 'building' && gridIndex === 4) {
      newGrid[7] = { type: 'terrain', id: 'road', data: { id: 'road', name: 'Road', emoji: './road6.png' } };
      setPlacedBuilding(true);
      setCurrentStep('terrain');
    } else if (itemType === 'terrain') {
      setTerrainCount(terrainCount + 1);
      setPlacedTerrain(true);
    } else if (itemType === 'pet') {
      setCityLifeCount(cityLifeCount + 1);
      setPlacedPet(true);
    }

    setGrid(newGrid);
  };

  const resetGrid = () => {
    setGrid(Array(9).fill(null).map(() => ({ type: 'empty', id: null })));
    setFlippedTile(null);
    setCurrentStep('building');
    setPlacedBuilding(false);
    setPlacedTerrain(false);
    setPlacedPet(false);
    setTerrainCount(0);
    setCityLifeCount(0);
    setSelectedItem(null);
  };

  const renderGridTile = (tile: GridTile, index: number) => {
    const isFlipped = flippedTile === index;
    const isCenter = index === 4;
    const isBottomCenter = index === 7;
    
    // Check if this tile should be highlighted as available
    const shouldHighlight = selectedItem && tile.type === 'empty' &&
      (selectedItem.type !== 'building' || isCenter);
    
    return (
      <div
        key={index}
        onClick={() => handleTileClick(index)}
        className={`
          relative aspect-square
          transition-all duration-300 
          ${tile.type === 'empty' 
            ? `${shouldHighlight 
                ? 'bg-gold-400/30 backdrop-blur-md ring-2 ring-gold-400/50 border-2 border-gold-400/80 cursor-pointer animate-pulse' 
                : isCenter 
                  ? 'bg-white/8 backdrop-blur-sm border border-gold-400/20 hover:bg-gold-400/20 hover:backdrop-blur-md hover:border-gold-400/40 cursor-pointer' 
                  : isBottomCenter 
                    ? 'bg-white/8 backdrop-blur-sm border border-green-400/20 hover:bg-green-400/20 hover:backdrop-blur-md hover:border-green-400/40 cursor-pointer' 
                    : 'bg-green-800/20 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:backdrop-blur-sm hover:border-white/20 cursor-pointer'
              }` 
            : 'bg-transparent hover:bg-white/5 hover:backdrop-blur-sm cursor-pointer'
          }
        `}
      >
        {tile.type === 'empty' ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-xs font-medium transition-opacity duration-300 z-10 ${
              isCenter ? 'text-gold-400/80' : 
              isBottomCenter ? 'text-green-400/80' : 
              'text-transparent'
            }`}>
              {isCenter ? 'Building' : isBottomCenter ? 'Road' : ''}
            </div>
          </div>
        ) : isFlipped && tile.type === 'building' ? (
          // Stock info flip side
          <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-2 text-xs animate-pop">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="font-bold text-gray-800">{tile.data.symbol}</div>
                <div className="text-gray-600 text-[10px] leading-tight">{tile.data.name}</div>
              </div>
              <div className="space-y-1">
                <div className="font-bold text-gray-900">{tile.data.price}</div>
                <div className={`text-[10px] font-medium ${
                  tile.data.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {tile.data.change} ({tile.data.changePercent})
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Normal tile display - seamless placement
          <div className="absolute inset-0 flex items-center justify-center">
            {tile.type === 'building' ? (
              <img 
                src={tile.data.emoji} 
                alt={tile.data.name}
                className="w-full h-full object-cover pixelated"
                style={{ imageRendering: 'pixelated' }}
              />
            ) : tile.type === 'terrain' ? (
              <img 
                src={tile.data.emoji} 
                alt={tile.data.name}
                className="w-full h-full object-contain pixelated"
                style={{ imageRendering: 'pixelated' }}
              />
            ) : (
              <img 
                src={tile.data.emoji} 
                alt={tile.data.name}
                className="w-full h-full object-contain pixelated"
                style={{ imageRendering: 'pixelated' }}
              />
            )}
          </div>
        )}
      </div>
    );
  };


  // Function to switch between terrain and city life steps with fade animation
  const switchToStep = (step: GameStep) => {
    if (step === 'terrain' || step === 'pet') {
      if (step !== currentStep) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentStep(step);
          setTimeout(() => setIsTransitioning(false), 50);
        }, 150);
      }
    }
  };



  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="font-cinzel font-bold text-3xl sm:text-4xl text-gold-400 mb-4">
          Try Building Your City
        </h2>
        <p className="text-investoria-muted text-lg max-w-2xl mx-auto">
          Experience how Investoria turns your investments into a living, breathing city. 
          Choose stocks, add terrain, and place pets to create your unique financial world.
        </p>
      </div>

      {/* Mobile-Optimized Layout */}
      <div className="space-y-6">
        {/* Mobile: Compact Instructions at Top */}
        <div className="lg:hidden">
          <div className="bg-gradient-to-br from-green-800/30 via-green-900/20 to-green-1000/30 backdrop-blur-md rounded-2xl p-4 shadow-lg">
            {/* Mobile Progress Indicator */}
            {currentStep !== 'complete' && (
              <div className="flex justify-center mb-4">
                <div className="flex items-center">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 border-2 ${
                        (step === 1 && placedBuilding) ||
                        (step === 2 && placedTerrain) ||
                        (step === 3 && placedPet)
                          ? 'bg-yellow-400 text-green-900 border-yellow-400'
                          : (step === 1 && currentStep === 'building') ||
                            (step === 2 && currentStep === 'terrain') ||
                            (step === 3 && currentStep === 'pet')
                            ? 'bg-transparent text-yellow-400 border-yellow-400'
                            : 'bg-transparent text-yellow-400/50 border-yellow-400/30'
                      }`}>
                        {(step === 1 && placedBuilding) ||
                         (step === 2 && placedTerrain) ||
                         (step === 3 && placedPet)
                          ? '✓'
                          : step
                        }
                      </div>
                      {step < 3 && (
                        <div className={`w-12 h-1 rounded-full transition-all duration-700 ${
                          (step === 1 && placedBuilding) || (step === 2 && placedTerrain)
                            ? 'bg-yellow-400'
                            : 'bg-yellow-400/20'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile: Compact Step Content */}
            {currentStep === 'building' && (
              <div className="text-center">
                <div className="text-lg font-bold text-gold-400 mb-2">Choose Your Building</div>
                <p className="text-investoria-muted text-sm mb-4">
                  {selectedItem && selectedItem.type === 'building' 
                    ? 'Now click the center tile to place your building!' 
                    : 'Select a building, then click the center tile to place it'}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {stockBuildings.map((building) => (
                    <div
                      key={building.id}
                      onClick={() => handleItemSelect(building, 'building')}
                      className={`bg-green-600/30 rounded-lg p-2 cursor-pointer hover:bg-green-600/50 active:bg-green-600/70 transition-all duration-200 border hover:scale-105 active:scale-95 select-none ${
                        selectedItem?.item.id === building.id && selectedItem?.type === 'building'
                          ? 'border-gold-400 ring-2 ring-gold-400/50 bg-gold-400/20' 
                          : 'border-gold-400/20 hover:border-gold-400/50'
                      }`}
                    >
                      <img 
                        src={building.emoji} 
                        alt={building.name} 
                        className="w-full h-8 object-contain mb-1 pointer-events-none" 
                      />
                      <div className="text-xs text-center text-gold-400 font-medium pointer-events-none">{building.name}</div>
                      {selectedItem?.item.id === building.id && selectedItem?.type === 'building' && (
                        <div className="absolute -top-2 -right-2 bg-gold-400 text-green-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                          ✓
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(currentStep === 'terrain' || currentStep === 'pet') && (
              <div className="text-center">
                <div className="text-lg font-bold text-gold-400 mb-2">Decorate Your City</div>
                <p className="text-investoria-muted text-sm mb-4">
                  {selectedItem 
                    ? 'Click any empty tile to place your selected item!' 
                    : 'Select an item, then click an empty tile to place it'}
                </p>
                
                {/* Mobile Toggle Buttons */}
                <div className="flex justify-center mb-4 gap-2">
                  <button
                    onClick={() => switchToStep('terrain')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      currentStep === 'terrain'
                        ? 'bg-yellow-400 text-green-900'
                        : 'bg-green-800/30 text-yellow-400/90 border border-yellow-400/30'
                    }`}
                  >
                    Terrain
                  </button>
                  <button
                    onClick={() => switchToStep('pet')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium ${
                      currentStep === 'pet'
                        ? 'bg-yellow-400 text-green-900'
                        : 'bg-green-800/30 text-yellow-400/90 border border-yellow-400/30'
                    }`}
                  >
                    City Life
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {currentStep === 'terrain' && terrainItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleItemSelect(item, 'terrain')}
                      className={`bg-green-600/30 rounded-lg p-2 cursor-pointer hover:bg-green-600/50 active:bg-green-600/70 transition-all duration-200 border hover:scale-105 active:scale-95 select-none relative ${
                        selectedItem?.item.id === item.id && selectedItem?.type === 'terrain'
                          ? 'border-gold-400 ring-2 ring-gold-400/50 bg-gold-400/20' 
                          : 'border-gold-400/20 hover:border-gold-400/50'
                      }`}
                    >
                      <img 
                        src={item.emoji} 
                        alt={item.name} 
                        className="w-full h-6 object-contain pointer-events-none" 
                      />
                      {selectedItem?.item.id === item.id && selectedItem?.type === 'terrain' && (
                        <div className="absolute -top-2 -right-2 bg-gold-400 text-green-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                          ✓
                        </div>
                      )}
                    </div>
                  ))}
                  {currentStep === 'pet' && pets.map((pet) => (
                    <div
                      key={pet.id}
                      onClick={() => handleItemSelect(pet, 'pet')}
                      className={`bg-green-600/30 rounded-lg p-2 cursor-pointer hover:bg-green-600/50 active:bg-green-600/70 transition-all duration-200 border hover:scale-105 active:scale-95 text-center select-none relative ${
                        selectedItem?.item.id === pet.id && selectedItem?.type === 'pet'
                          ? 'border-gold-400 ring-2 ring-gold-400/50 bg-gold-400/20' 
                          : 'border-gold-400/20 hover:border-gold-400/50'
                      }`}
                    >
                      <img 
                        src={pet.emoji} 
                        alt={pet.name} 
                        className="w-full h-6 object-contain pointer-events-none" 
                      />
                      {selectedItem?.item.id === pet.id && selectedItem?.type === 'pet' && (
                        <div className="absolute -top-2 -right-2 bg-gold-400 text-green-900 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                          ✓
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 'complete' && (
              <div className="text-center">
                <div className="text-lg font-bold text-gold-400 mb-2">🎉 City Complete!</div>
                <p className="text-investoria-muted text-sm">Tap any building to see stock information</p>
              </div>
            )}
          </div>
        </div>

        {/* Desktop: Side-by-Side Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Desktop Instructions */}
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-radial from-gold-400/10 to-transparent rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute top-1/2 -left-8 w-24 h-24 bg-gradient-radial from-green-700/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="relative bg-gradient-to-br from-green-800/30 via-green-900/20 to-green-1000/30 backdrop-blur-md rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] h-[500px] overflow-hidden">
          {/* Step Progress Indicator - Hidden when complete */}
          {currentStep !== 'complete' && (
            <div className="flex justify-center mb-8">
            <div className="flex items-center">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 border-2 ${
                    // Completed steps - filled with gold
                    (step === 1 && placedBuilding) ||
                    (step === 2 && placedTerrain) ||
                    (step === 3 && placedPet)
                      ? 'bg-yellow-400 text-green-900 border-yellow-400'
                      // Current active step - gold border only
                      : (step === 1 && currentStep === 'building') ||
                        (step === 2 && currentStep === 'terrain') ||
                        (step === 3 && currentStep === 'pet')
                        ? 'bg-transparent text-yellow-400 border-yellow-400'
                        // Inactive steps
                        : 'bg-transparent text-yellow-400/50 border-yellow-400/30'
                  }`}>
                    {(step === 1 && placedBuilding) ||
                     (step === 2 && placedTerrain) ||
                     (step === 3 && placedPet)
                      ? '✓'
                      : step
                    }
                  </div>
                  {step < 3 && (
                    <div className={`w-16 h-1 rounded-full transition-all duration-700 ${
                      (step === 1 && placedBuilding) || (step === 2 && placedTerrain)
                        ? 'bg-yellow-400'
                        : 'bg-yellow-400/20'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
            </div>
          )}

          {/* Dynamic Content with Fade Transitions */}
          <div className="relative">
            {/* Step 1 - Buildings */}
            {currentStep === 'building' && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <div className="text-xl font-bold text-gold-400">Choose Your Building</div>
                </div>
                <div className="grid grid-cols-3 gap-x-2 gap-y-6">
                  {stockBuildings.map((item) => (
                    <div
                      key={item.id}
                    onClick={() => handleItemSelect(item, 'building')}
                    className={`aspect-square rounded-xl bg-transparent hover:bg-white/20 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 group p-2 cursor-pointer hover:ring-2 overflow-hidden ${
                      selectedItem?.item.id === item.id && selectedItem?.type === 'building'
                        ? 'ring-2 ring-gold-400/50 bg-gold-400/20' 
                        : 'hover:ring-gold-400/30'
                    }`}
                    >
                      <div className="flex-1 flex items-center justify-center w-full">
                        <img 
                          src={item.emoji} 
                          alt={item.name}
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform pixelated pointer-events-none rounded-lg"
                          style={{ imageRendering: 'pixelated' }}
                        />
                      </div>
                      <span className="text-xs text-white font-semibold text-center leading-tight pointer-events-none px-1 flex-shrink-0">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Combined Terrain & City Life Step */}
            {(currentStep === 'terrain' || currentStep === 'pet') && (
              <div className="animate-fade-in flex flex-col h-full">
                <div className="text-center mb-4">
                  <div className="text-xl font-bold text-gold-400 mb-2">Terrain & City Life</div>
                  <div className="text-investoria-muted mb-6">Decorate your city however you like!</div>
                  
                  {/* Rectangular Toggle Buttons */}
                  <div className="flex justify-center mb-4 gap-2">
                    <button
                      onClick={() => switchToStep('terrain')}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-sm ${
                        currentStep === 'terrain'
                          ? 'bg-yellow-400 text-green-900 border border-yellow-300 font-semibold transition-all duration-200'
                          : 'bg-green-800/30 text-yellow-400/90 hover:bg-green-800/40 hover:text-yellow-400 border border-yellow-400/30 hover:border-yellow-400/50'
                      }`}
                      title="Terrain"
                    >
                      {/* Tree Icon */}
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l-2 4h1v2l-3 6h2v8h4v-8h2l-3-6v-2h1l-2-4z"/>
                        <circle cx="12" cy="8" r="3"/>
                        <circle cx="8" cy="12" r="2"/>
                        <circle cx="16" cy="12" r="2"/>
                      </svg>
                      Terrain
                    </button>
                    
                    <button
                      onClick={() => switchToStep('pet')}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-sm ${
                        currentStep === 'pet'
                          ? 'bg-yellow-400 text-green-900 border border-yellow-300 font-semibold transition-all duration-200'
                          : 'bg-green-800/30 text-yellow-400/90 hover:bg-green-800/40 hover:text-yellow-400 border border-yellow-400/30 hover:border-yellow-400/50'
                      }`}
                      title="City Life"
                    >
                      {/* Heart Icon */}
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      City Life
                    </button>
                  </div>
                </div>
                
                <div className={`grid grid-cols-3 gap-3 transition-opacity duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}>
                  {currentStep === 'terrain' 
                    ? terrainItems.map((item, index) => (
                        <div
                          key={item.id}
                          onClick={() => handleItemSelect(item, 'terrain')}
                          className={`aspect-square rounded-xl bg-transparent hover:bg-white/20 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 group p-2 cursor-pointer hover:ring-2 overflow-hidden ${
                            !isTransitioning ? 'animate-fade-in' : ''
                          } ${
                            selectedItem?.item.id === item.id && selectedItem?.type === 'terrain'
                              ? 'ring-2 ring-gold-400/50 bg-gold-400/20' 
                              : 'hover:ring-yellow-400/60'
                          }`}
                          style={{ 
                            animationDelay: `${index * 50}ms`,
                            animationFillMode: 'both'
                          }}
                        >
                          <img 
                            src={item.emoji} 
                            alt={item.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform pixelated pointer-events-none rounded-lg"
                            style={{ imageRendering: 'pixelated' }}
                          />
                        </div>
                      ))
                    : pets.map((item, index) => (
                        <div
                          key={item.id}
                          onClick={() => handleItemSelect(item, 'pet')}
                          className={`aspect-square rounded-xl bg-transparent hover:bg-white/20 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 group p-2 cursor-pointer hover:ring-2 overflow-hidden ${
                            !isTransitioning ? 'animate-fade-in' : ''
                          } ${
                            selectedItem?.item.id === item.id && selectedItem?.type === 'pet'
                              ? 'ring-2 ring-gold-400/50 bg-gold-400/20' 
                              : 'hover:ring-yellow-400/60'
                          }`}
                          style={{ 
                            animationDelay: `${index * 50}ms`,
                            animationFillMode: 'both'
                          }}
                        >
                          <img 
                            src={item.emoji} 
                            alt={item.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform pixelated pointer-events-none rounded-lg"
                            style={{ imageRendering: 'pixelated' }}
                          />
                        </div>
                      ))
                  }
                </div>
              </div>
            )}

            
            {currentStep === 'complete' && (
              <div className="animate-fade-in h-full flex flex-col relative">
                <div 
                  className="overflow-y-scroll flex-1 pr-2 scroll-smooth hide-scrollbar"
                  style={{ maxHeight: '450px' }}
                  onScroll={(e) => {
                    const target = e.target as HTMLDivElement;
                    if (target.scrollTop > 0) {
                      setHasScrolled(true);
                    } else {
                      setHasScrolled(false);
                    }
                  }}
                  onWheel={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  {(() => {
                    const buildingTile = grid.find(tile => tile.type === 'building');
                    if (buildingTile && buildingTile.data) {
                      return (
                        <div className="space-y-6 pb-4">
                          {/* Stock Header with Building */}
                          <div className="relative flex items-center">
                            <div className="w-24 h-24 flex-shrink-0">
                              <img 
                                src={buildingTile.data.emoji} 
                                alt={buildingTile.data.name}
                                className="w-full h-full object-contain rounded-lg"
                              />
                            </div>
                            <div className="flex-1 flex flex-col justify-center ml-6">
                              <div className="text-2xl font-bold text-yellow-400">
                                {buildingTile.data.symbol}
                              </div>
                              <div className="text-lg text-white/90 font-medium">
                                {buildingTile.data.name}
                              </div>
                            </div>
                          </div>

                          {/* Line Graph */}
                          <div className="bg-gradient-to-br from-yellow-400/10 to-amber-500/10 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/20">
                            <div className="h-32 relative">
                              <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                                {/* Grid lines */}
                                <defs>
                                  <pattern id="grid" width="30" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 30 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
                                  </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                                
                                {/* Stock line - dynamic based on building data */}
                                <polyline
                                  fill="none"
                                  stroke="#10b981"
                                  strokeWidth="2"
                                  points={buildingTile.data.lineGraph}
                                />
                                
                                {/* Gradient fill under line */}
                                <defs>
                                  <linearGradient id="stockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.3"/>
                                    <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                                  </linearGradient>
                                </defs>
                                <polygon
                                  fill="url(#stockGradient)"
                                  points={`${buildingTile.data.lineGraph} 300,100 0,100`}
                                />
                              </svg>
                              
                              {/* Current price indicator */}
                              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                {buildingTile.data.price}
                              </div>
                            </div>
                          </div>

                          {/* Portfolio Metrics */}
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-white/60">Investment</span>
                              <span className="text-white font-semibold">{buildingTile.data.investment}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-white/60">Current Value</span>
                              <span className={`font-semibold ${
                                parseFloat(buildingTile.data.currentValue.replace('$', '').replace(',', '')) > 
                                parseFloat(buildingTile.data.investment.replace('$', '').replace(',', '')) 
                                ? 'text-green-400' : 'text-red-400'
                              }`}>
                                {buildingTile.data.currentValue}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-white/60">Stock Price</span>
                              <span className="text-white font-semibold">{buildingTile.data.price}</span>
                            </div>
                            <div className="flex justify-between items-center border-t border-white/10 pt-3">
                              <span className="text-white/60">Available Balance</span>
                              <span className="text-green-400 font-semibold">$25.00</span>
                            </div>
                          </div>

                          {/* Scroll Chevron - positioned after portfolio metrics */}
                          {!hasScrolled && (
                            <div className="flex justify-center mt-4">
                              <div className="animate-pulse bg-green-800/20 rounded-full p-2 backdrop-blur-sm border border-yellow-400/20">
                                <svg className="w-4 h-4 text-yellow-400/80" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          )}

                          {/* Sector Information */}
                          <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-4 border border-blue-400/20">
                            <h3 className="text-lg font-bold text-blue-400 mb-3">About {buildingTile.data.name}</h3>
                            <p className="text-white/80 text-sm leading-relaxed mb-4">
                              {buildingTile.data.sectorInfo.description}
                            </p>
                            <div className="grid grid-cols-2 gap-3 text-xs">
                              <div className="bg-white/5 rounded-lg p-2">
                                <div className="text-white/60">Market Cap</div>
                                <div className="text-white font-semibold">{buildingTile.data.sectorInfo.marketCap}</div>
                              </div>
                              <div className="bg-white/5 rounded-lg p-2">
                                <div className="text-white/60">YTD Return</div>
                                <div className="text-green-400 font-semibold">{buildingTile.data.sectorInfo.ytdReturn}</div>
                              </div>
                            </div>
                          </div>

                          {/* Top Performing Stocks */}
                          <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm rounded-xl p-4 border border-green-400/20">
                            <h3 className="text-lg font-bold text-green-400 mb-3">Top {buildingTile.data.name.replace(' Sector', '')} Performers</h3>
                            <div className="space-y-3">
                              {buildingTile.data.sectorInfo.topStocks.map((stock: any, index: number) => (
                                <div key={index} className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                                  <div>
                                    <div className="text-white font-medium text-sm">{stock.name}</div>
                                    <div className="text-white/60 text-xs">{stock.symbol}</div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-white font-semibold text-sm">{stock.price}</div>
                                    <div className={`text-xs ${
                                      stock.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                                    }`}>
                                      {stock.change}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Market Insights */}
                          <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-4 border border-purple-400/20">
                            <h3 className="text-lg font-bold text-purple-400 mb-3">Market Insights</h3>
                            <div className="space-y-3">
                              {buildingTile.data.sectorInfo.insights.map((insight: any, index: number) => (
                                <div key={index} className="flex items-start gap-3">
                                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <div className="text-white/80 text-sm">
                                    <strong>{insight.title}:</strong> {insight.content}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>


                        </div>
                      );
                    }
                    return null;
                  })()}
                </div>
              </div>
            )}
          </div>
          </div>
        </div>

          {/* Right Side - Desktop Interactive Grid */}
          <div className="flex items-center justify-center h-[500px]">
            <div className="grid grid-cols-3 gap-0 w-full max-w-lg aspect-square rounded-lg overflow-hidden shadow-lg">
              {grid.map((tile, index) => renderGridTile(tile, index))}
            </div>
          </div>
        </div>

        {/* Mobile: Interactive Grid */}
        <div className="lg:hidden flex justify-center">
          <div className="w-full max-w-sm">
            <div className="grid grid-cols-3 gap-0 aspect-square rounded-xl overflow-hidden shadow-xl border-2 border-gold-400/20">
              {grid.map((tile, index) => renderGridTile(tile, index))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Centralized Start Over Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={resetGrid}
          className="group px-6 py-3 bg-gradient-to-r from-gold-400/20 to-gold-500/20 hover:from-gold-400/30 hover:to-gold-500/30 text-gold-400 rounded-xl transition-all duration-300 font-semibold border border-gold-400/30 hover:border-gold-400/50 hover:shadow-lg hover:shadow-gold-400/10 hover:scale-105"
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            Start Over
          </span>
        </button>
      </div>
    </section>
  );
}

