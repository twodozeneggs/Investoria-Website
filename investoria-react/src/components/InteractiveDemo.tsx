import { useState } from 'react';

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

  const stockBuildings: StockBuilding[] = [
    {
      id: 'financial',
      symbol: 'XLF',
      name: 'Financial Sector',
      price: '$43.21',
      change: '+0.87',
      changePercent: '+2.05%',
      emoji: './bank_level1.png',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'energy',
      symbol: 'XLE',
      name: 'Energy Sector',
      price: '$89.45',
      change: '+2.15',
      changePercent: '+2.46%',
      emoji: './energy_level1.png',
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 'healthcare',
      symbol: 'XLV',
      name: 'Healthcare Sector',
      price: '$156.78',
      change: '-0.92',
      changePercent: '-0.58%',
      emoji: './hospital_level1.png',
      color: 'from-red-400 to-red-600'
    },
    {
      id: 'industrial',
      symbol: 'XLI',
      name: 'Industrial Sector',
      price: '$132.67',
      change: '+1.45',
      changePercent: '+1.11%',
      emoji: './industry_level2.png',
      color: 'from-gray-400 to-gray-600'
    },
    {
      id: 'commercial',
      symbol: 'XLY',
      name: 'Consumer Sector',
      price: '$198.34',
      change: '+3.21',
      changePercent: '+1.64%',
      emoji: './market_level2.png',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'materials',
      symbol: 'XLB',
      name: 'Materials Sector',
      price: '$94.12',
      change: '+0.56',
      changePercent: '+0.60%',
      emoji: './mine_level2.png',
      color: 'from-yellow-400 to-yellow-600'
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


  const handleTileClick = (gridIndex: number) => {
    const tile = grid[gridIndex];
    if (tile.type === 'building') {
      setFlippedTile(flippedTile === gridIndex ? null : gridIndex);
    }
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
  };

  const renderGridTile = (tile: GridTile, index: number) => {
    const isFlipped = flippedTile === index;
    const isCenter = index === 4;
    const isBottomCenter = index === 7;
    
    return (
      <div
        key={index}
        onClick={() => handleTileClick(index)}
        onDragOver={handleDragOver}
        onDragEnter={(e) => handleDragEnter(e, index)}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e, index)}
        className={`
          relative aspect-square
          transition-all duration-300 cursor-pointer
          ${tile.type === 'empty' 
            ? `${isCenter ? 'bg-white/8 backdrop-blur-sm border border-gold-400/20 hover:bg-gold-400/20 hover:backdrop-blur-md hover:border-gold-400/40' : 
                isBottomCenter ? 'bg-white/8 backdrop-blur-sm border border-green-400/20 hover:bg-green-400/20 hover:backdrop-blur-md hover:border-green-400/40' :
                'bg-green-800/20 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:backdrop-blur-sm hover:border-white/20'}` 
            : 'bg-transparent hover:bg-white/5 hover:backdrop-blur-sm'
          }
          ${draggedOver === index && tile.type === 'empty' ? 'bg-gold-400/30 backdrop-blur-md ring-2 ring-gold-400/50 border-gold-400/60' : ''}
        `}
      >
        {tile.type === 'empty' ? (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Subtle grid pattern for empty tiles */}
            <div className="absolute inset-1 border border-dashed border-white/10 rounded-sm"></div>
            <div className={`text-xs font-medium transition-opacity duration-300 z-10 ${
              isCenter ? 'text-gold-400/80' : 
              isBottomCenter ? 'text-green-400/80' : 
              'text-white/30'
            }`}>
              {isCenter ? 'Building' : isBottomCenter ? 'Road' : '•'}
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

  const handleStepPlacement = (item: any) => {
    if (currentStep === 'building') {
      // Place building in center (index 4) and road in bottom center (index 7)
      const newGrid = [...grid];
      newGrid[4] = { type: 'building', id: item.id, data: item };
      newGrid[7] = { type: 'terrain', id: 'road', data: { id: 'road', name: 'Road', emoji: './road6.png' } };
      setGrid(newGrid);
      setPlacedBuilding(true);
      setCurrentStep('terrain');
    } else if (currentStep === 'terrain') {
      // Find the first empty tile for terrain
      const emptyIndex = grid.findIndex(tile => tile.type === 'empty');
      if (emptyIndex !== -1) {
        const newGrid = [...grid];
        newGrid[emptyIndex] = {
          type: 'terrain',
          id: item.id,
          data: item
        };
        setGrid(newGrid);
        setTerrainCount(terrainCount + 1);
        setPlacedTerrain(true);
      }
    } else if (currentStep === 'pet') {
      // Place city life item
      const emptyIndex = grid.findIndex(tile => tile.type === 'empty');
      if (emptyIndex !== -1) {
        const newGrid = [...grid];
        newGrid[emptyIndex] = {
          type: 'pet',
          id: item.id,
          data: item
        };
        setGrid(newGrid);
        setCityLifeCount(cityLifeCount + 1);
        setPlacedPet(true);
      }
    }
  };

  // Function to switch between terrain and city life steps
  const switchToStep = (step: GameStep) => {
    if (step === 'terrain' || step === 'pet') {
      setCurrentStep(step);
    }
  };

  // Drag and Drop handlers
  const handleDragStart = (e: React.DragEvent, item: any, itemType: TileType) => {
    e.dataTransfer.setData('application/json', JSON.stringify({ item, itemType }));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const [draggedOver, setDraggedOver] = useState<number | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDragEnter = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDraggedOver(index);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    // Only clear if we're leaving the entire grid area
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setDraggedOver(null);
    }
  };

  const handleDrop = (e: React.DragEvent, gridIndex: number) => {
    e.preventDefault();
    setDraggedOver(null); // Clear drag state
    
    const data = JSON.parse(e.dataTransfer.getData('application/json'));
    const { item, itemType } = data;

    // Don't allow dropping on occupied tiles
    if (grid[gridIndex].type !== 'empty') return;

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

      {/* Side-by-Side Layout */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Side - Single Step Card with Transitions */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 ring-1 ring-gold-400/20 shadow-2xl min-h-[420px]">
          {/* Step Indicator */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    (step === 1 && (currentStep === 'building' || placedBuilding)) ||
                    (step === 2 && (currentStep === 'terrain' || placedTerrain)) ||
                    (step === 3 && (currentStep === 'pet' || placedPet || currentStep === 'complete'))
                      ? 'bg-gold-400 text-green-1000'
                      : (step === 1 && placedBuilding) ||
                        (step === 2 && placedTerrain) ||
                        (step === 3 && placedPet)
                        ? 'bg-green-600 text-white'
                        : 'bg-green-800/30 text-gold-400/60'
                  }`}>
                    {(step === 1 && placedBuilding) ||
                     (step === 2 && placedTerrain) ||
                     (step === 3 && placedPet)
                      ? '✓'
                      : step
                    }
                  </div>
                  {step < 3 && (
                    <div className={`w-8 h-0.5 transition-colors duration-300 ${
                      (step === 1 && placedBuilding) || (step === 2 && placedTerrain)
                        ? 'bg-gold-400'
                        : 'bg-gold-400/30'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Content with Fade Transitions */}
          <div className="relative">
            {/* Step 1 - Buildings */}
            {currentStep === 'building' && (
              <div className="animate-fade-in">
                <div className="text-center mb-4">
                  <div className="text-xl font-bold text-gold-400 mb-2">Step 1</div>
                  <div className="text-investoria-muted">Choose Your Building</div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {stockBuildings.map((item) => (
                    <div
                      key={item.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item, 'building')}
                    onClick={() => handleStepPlacement(item)}
                    className="aspect-square rounded-lg bg-transparent hover:bg-white/20 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 group p-2 cursor-grab active:cursor-grabbing hover:ring-2 hover:ring-gold-400/30"
                    >
                      <img 
                        src={item.emoji} 
                        alt={item.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform pixelated pointer-events-none"
                        style={{ imageRendering: 'pixelated' }}
                      />
                      <span className="text-[10px] text-gold-400 font-medium text-center leading-tight pointer-events-none">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Combined Terrain & City Life Step */}
            {(currentStep === 'terrain' || currentStep === 'pet') && (
              <div className="animate-fade-in">
                <div className="text-center mb-4">
                  <div className="text-xl font-bold text-gold-400 mb-2">Terrain & City Life</div>
                  <div className="text-investoria-muted mb-3">Decorate your city however you like!</div>
                  
                  {/* Toggle buttons */}
                  <div className="flex justify-center mb-4">
                    <div className="flex bg-green-800/30 rounded-xl p-1">
                      <button
                        onClick={() => switchToStep('terrain')}
                        className={`px-3 py-1 rounded-lg transition-all duration-200 text-xs font-medium ${
                          currentStep === 'terrain'
                            ? 'bg-gold-400 text-green-1000 shadow-lg'
                            : 'text-gold-400 hover:bg-gold-400/10'
                        }`}
                      >
                        🌳 Terrain
                      </button>
                      <button
                        onClick={() => switchToStep('pet')}
                        className={`px-3 py-1 rounded-lg transition-all duration-200 text-xs font-medium ${
                          currentStep === 'pet'
                            ? 'bg-gold-400 text-green-1000 shadow-lg'
                            : 'text-gold-400 hover:bg-gold-400/10'
                        }`}
                      >
                        🏙️ City Life
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {currentStep === 'terrain' 
                    ? terrainItems.map((item) => (
                        <div
                          key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item, 'terrain')}
                      onClick={() => handleStepPlacement(item)}
                      className="aspect-square rounded-lg bg-transparent hover:bg-white/20 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 group p-2 cursor-grab active:cursor-grabbing hover:ring-2 hover:ring-gold-400/30"
                        >
                          <img 
                            src={item.emoji} 
                            alt={item.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform pixelated pointer-events-none"
                            style={{ imageRendering: 'pixelated' }}
                          />
                          <span className="text-[10px] text-gold-400 font-medium text-center leading-tight pointer-events-none">
                            {item.name}
                          </span>
                        </div>
                      ))
                    : pets.map((item) => (
                        <div
                          key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item, 'pet')}
                      onClick={() => handleStepPlacement(item)}
                      className="aspect-square rounded-lg bg-transparent hover:bg-white/20 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center gap-1 group p-2 cursor-grab active:cursor-grabbing hover:ring-2 hover:ring-gold-400/30"
                        >
                          <img 
                            src={item.emoji} 
                            alt={item.name}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform pixelated pointer-events-none"
                            style={{ imageRendering: 'pixelated' }}
                          />
                          <span className="text-[10px] text-gold-400 font-medium text-center leading-tight pointer-events-none">
                            {item.name}
                          </span>
                        </div>
                      ))
                  }
                </div>
              </div>
            )}

            {/* Complete - Stock Information */}
            {grid.filter(tile => tile.type !== 'empty').length >= 8 && (
              <div className="animate-fade-in">
                <div className="text-center mb-4">
                  <button
            onClick={() => setCurrentStep('complete')}
            className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 text-green-1000 rounded-xl transition-all duration-200 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    🎉 Complete City & View Stock Info
                  </button>
                </div>
              </div>
            )}
            
            {currentStep === 'complete' && (
              <div className="animate-fade-in">
                <div className="text-center">
                  {(() => {
                    const buildingTile = grid.find(tile => tile.type === 'building');
                    if (buildingTile && buildingTile.data) {
                      return (
                        <div className="space-y-4">
                          <div className="text-xl font-bold text-gold-400 mb-2">Complete!</div>
                          <div className="text-2xl font-bold text-gold-400">
                            {buildingTile.data.symbol}
                          </div>
                          <div className="text-lg text-white">
                            {buildingTile.data.name}
                          </div>
                          <div className="p-4 bg-gold-400/10 rounded-lg space-y-2">
                            <div className="text-lg font-bold text-white">{buildingTile.data.price}</div>
                            <div className={`text-sm font-medium ${
                              buildingTile.data.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {buildingTile.data.change} ({buildingTile.data.changePercent})
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

        {/* Right Side - Interactive Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gold-400 text-center lg:text-left">
            Your City
          </h3>
          <div className="grid grid-cols-3 gap-0 max-w-sm mx-auto lg:mx-0 rounded-lg overflow-hidden shadow-lg">
            {grid.map((tile, index) => renderGridTile(tile, index))}
          </div>
          
          {/* Instructions & Reset */}
          <div className="text-center lg:text-left space-y-4">
            <div className="text-investoria-muted text-sm">
              {currentStep === 'building' ? (
                <>🏢 Choose a building from the left to place in the center</>
              ) : currentStep === 'terrain' || currentStep === 'pet' ? (
                <>🎨 Use the toggle buttons to switch between terrain and city life items</>
              ) : (
                <>🎉 City complete! Your stock information is revealed on the left!</>
              )}
            </div>
            
            <button
              onClick={resetGrid}
              className="px-6 py-2 bg-gold-400/20 hover:bg-gold-400/30 text-gold-400 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              🔄 Start Over
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
