import React, { useState } from 'react';
import { Settings, MessageSquare, ShoppingBag } from 'lucide-react';

interface StoryItem {
  id: number;
  title: string;
  description: string;
}

const storyItems: StoryItem[] = [
  { id: 1, title: 'Stories para chamar atenção', description: 'Ideal para engajar e captar leads' },
  { id: 2, title: 'Stories com caixa de pergunta', description: 'Ideal para engajar e captar leads' },
  { id: 3, title: 'Stories com sticker de reação', description: 'Ideal para engajar e captar leads' },
  { id: 4, title: 'Stories Aulão', description: 'Ideal para mostrar autoridade no assunto' },
  { id: 5, title: 'Stories Prova Social', description: 'Ideal para gerar autoridade e vendas' },
  { id: 6, title: 'Stories de oferta', description: 'Oferta limitada e imperdível' },
  { id: 7, title: 'Stories para amadurecer a audiência', description: 'Ideal para elevar o nível de consciência' },
];

function App() {
  const [selectedGroup, setSelectedGroup] = useState('story');
  const [textInput, setTextInput] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);

  const handleGroupClick = (group: string) => {
    setSelectedGroup(group);
    setShowTextInput(false);
  };

  const handleStoryClick = () => {
    setShowTextInput(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex justify-between p-4 bg-gray-200">
          <button
            className={`px-4 py-2 rounded-md ${selectedGroup === 'story' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handleGroupClick('story')}
          >
            Story
          </button>
          <button
            className={`px-4 py-2 rounded-md ${selectedGroup === 'criativo' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handleGroupClick('criativo')}
          >
            Criativo
          </button>
          <button
            className={`px-4 py-2 rounded-md ${selectedGroup === 'venda' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handleGroupClick('venda')}
          >
            Página de Venda
          </button>
        </div>
        {selectedGroup === 'story' && (
          <div>
            {storyItems.map((item) => (
              <div key={item.id} className="flex items-center p-4 border-b" onClick={handleStoryClick}>
                <Settings className="w-6 h-6 mr-4 text-gray-500" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedGroup === 'criativo' && (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Grupo Criativo</h2>
            <p>Conteúdo para o grupo Criativo será adicionado aqui.</p>
          </div>
        )}
        {selectedGroup === 'venda' && (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Página de Venda</h2>
            <p>Conteúdo para a Página de Venda será adicionado aqui.</p>
          </div>
        )}
      </div>
      {showTextInput && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg w-full max-w-md">
            <textarea
              className="w-full h-32 p-2 border rounded-md"
              placeholder="Escreva seu story aqui..."
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
                onClick={() => setShowTextInput(false)}
              >
                Enviar
              </button>
              <button
                className="px-4 py-2 bg-gray-300 rounded-md"
                onClick={() => setShowTextInput(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;