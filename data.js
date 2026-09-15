// BANCO DE DADOS EXCLUSIVO PARA TÉC. DIAGNÓSTICO E TERAPÊUTICA

const qGerais = [
    // FÁCIL
    { id: 1, difficulty: 'facil', text: 'Segundo a Pauta Deontológica, o funcionário público deve agir com:', type: 'single', options: [{ id: 'a', text: 'Imparcialidade e Isenção' }, { id: 'b', text: 'Interesse pessoal' }, { id: 'c', text: 'Autoritarismo' }], correctAnswers: ['a'] },
    { id: 2, difficulty: 'facil', text: 'O que avalia principalmente o Censo 2024?', type: 'single', options: [{ id: 'a', text: 'A população e a habitação de Angola' }, { id: 'b', text: 'Apenas os hospitais' }, { id: 'c', text: 'O clima e a agricultura' }], correctAnswers: ['a'] },
    // NORMAL
    { id: 3, difficulty: 'normal', text: 'No âmbito do IIMS, a avaliação da Mortalidade Materno-Infantil visa:', type: 'single', options: [{ id: 'a', text: 'Medir a eficácia dos cuidados de saúde' }, { id: 'b', text: 'Definir orçamentos militares' }, { id: 'c', text: 'Aprovar impostos' }], correctAnswers: ['a'] },
    { id: 4, difficulty: 'normal', text: 'O princípio da Beneficência em bioética exige que o profissional:', type: 'single', options: [{ id: 'a', text: 'Aja de forma a maximizar o bem-estar do doente' }, { id: 'b', text: 'Cobre por consultas no sistema público' }, { id: 'c', text: 'Evite tratar casos complexos' }], correctAnswers: ['a'] },
    // DIFÍCIL
    { id: 5, difficulty: 'dificil', text: 'O "Viés Algorítmico" (Algorithmic Bias) na IA na saúde pública significa:', type: 'single', options: [{ id: 'a', text: 'Modelos que reproduzem ou ampliam desigualdades sociais/raciais' }, { id: 'b', text: 'Vírus de computador' }, { id: 'c', text: 'Lentidão no processamento de imagens DICOM' }], correctAnswers: ['a'] }
];

const qAnalises = [
    // FÁCIL
    { id: 101, difficulty: 'facil', text: 'Os glóbulos vermelhos (eritrócitos) têm a função principal de:', type: 'single', options: [{ id: 'a', text: 'Transportar oxigénio' }, { id: 'b', text: 'Combater vírus' }, { id: 'c', text: 'Coagular o sangue' }], correctAnswers: ['a'] },
    { id: 102, difficulty: 'facil', text: 'A técnica de Autoclave utiliza:', type: 'single', options: [{ id: 'a', text: 'Calor húmido e pressão' }, { id: 'b', text: 'Radiação' }, { id: 'c', text: 'Álcool 70%' }], correctAnswers: ['a'] },
    // NORMAL
    { id: 103, difficulty: 'normal', text: 'A coloração de Ziehl-Neelsen serve especificamente para identificar:', type: 'single', options: [{ id: 'a', text: 'Micobactérias (B.A.A.R.)' }, { id: 'b', text: 'Bactérias Gram-negativas' }, { id: 'c', text: 'Esporos de fungos' }], correctAnswers: ['a'] },
    { id: 104, difficulty: 'normal', text: 'No Plaquetograma, o Índice de Volume Plaquetário Médio (VPM) aumentado indica:', type: 'single', options: [{ id: 'a', text: 'Destruição plaquetária periférica e medula hiperativa' }, { id: 'b', text: 'Falta de ferro' }, { id: 'c', text: 'Excesso de água no plasma' }], correctAnswers: ['a'] },
    // DIFÍCIL
    { id: 105, difficulty: 'dificil', text: 'Na identificação de Enterobactérias, o meio de cultura Ágar MacConkey é:', type: 'single', options: [{ id: 'a', text: 'Seletivo (sais biliares) e Diferencial (fermentação da lactose)' }, { id: 'b', text: 'Apenas nutritivo' }, { id: 'c', text: 'Usado para cultivar vírus' }], correctAnswers: ['a'] }
];

const qFarmacia = [
    { id: 201, difficulty: 'facil', text: 'Qual das seguintes é uma via de administração enteral?', type: 'single', options: [{ id: 'a', text: 'Via oral' }, { id: 'b', text: 'Via intravenosa' }, { id: 'c', text: 'Via intramuscular' }], correctAnswers: ['a'] },
    { id: 202, difficulty: 'normal', text: 'A Farmacocinética estuda os processos de:', type: 'single', options: [{ id: 'a', text: 'Absorção, Distribuição, Biotransformação e Excreção' }, { id: 'b', text: 'Ação e efeito (Relação dose-efeito)' }, { id: 'c', text: 'Marketing de medicamentos' }], correctAnswers: ['a'] },
    { id: 203, difficulty: 'dificil', text: 'Na Gestão de Stocks Hospitalares, a Classificação ABC baseia-se em:', type: 'single', options: [{ id: 'a', text: 'Valor de consumo anual dos medicamentos (Redução de custos)' }, { id: 'b', text: 'Ordem alfabética das caixas' }, { id: 'c', text: 'Data de validade apenas' }], correctAnswers: ['a'] }
];

const qRadiologia = [
    { id: 301, difficulty: 'facil', text: 'A radiação X é uma forma de radiação:', type: 'single', options: [{ id: 'a', text: 'Ionizante' }, { id: 'b', text: 'Não ionizante' }, { id: 'c', text: 'Sonora' }], correctAnswers: ['a'] },
    { id: 302, difficulty: 'normal', text: 'Em proteção radiológica, os pilares fundamentais são:', type: 'single', options: [{ id: 'a', text: 'Tempo, Distância e Blindagem' }, { id: 'b', text: 'Água, Luz e Calor' }, { id: 'c', text: 'Velocidade, Peso e Altura' }], correctAnswers: ['a'] },
    { id: 303, difficulty: 'dificil', text: 'Um meio de contraste radiológico opaco comum para o trato gastrointestinal é baseado em:', type: 'single', options: [{ id: 'a', text: 'Sulfato de Bário' }, { id: 'b', text: 'Glicose salina' }, { id: 'c', text: 'Nitrogénio líquido' }], correctAnswers: ['a'] }
];

const qFisioterapia = [
    { id: 401, difficulty: 'facil', text: 'Num paciente acamado, a mobilização precoce serve para prevenir:', type: 'single', options: [{ id: 'a', text: 'Úlceras de pressão e atrofia muscular' }, { id: 'b', text: 'Cegueira' }, { id: 'c', text: 'Queda de cabelo' }], correctAnswers: ['a'] },
    { id: 402, difficulty: 'normal', text: 'Na fase de protetização de uma amputação transtibial, o que deve ser evitado?', type: 'single', options: [{ id: 'a', text: 'Pressão excessiva sobre proeminências ósseas' }, { id: 'b', text: 'O enfaixamento do coto' }, { id: 'c', text: 'A marcha precoce com apoio' }], correctAnswers: ['a'] },
    { id: 403, difficulty: 'dificil', text: 'A Doença Pulmonar Obstrutiva Crónica (DPOC) em fisioterapia respiratória apresenta na Espirometria:', type: 'single', options: [{ id: 'a', text: 'Relação VEF1/CVF inferior a 70% após broncodilatador' }, { id: 'b', text: 'Aumento da Capacidade Vital Forçada' }, { id: 'c', text: 'Diminuição do Volume Residual' }], correctAnswers: ['a'] }
];

// Generates 50 questions exactly per requested difficulty
function buildCategory(specifics, maxNeeded, requestedDiff) {
    let rawPool = [...specifics, ...qGerais].filter(q => q.difficulty === requestedDiff);
    let pool = [];
    let counter = 1;
    
    // Fill until 50 questions
    while(pool.length < maxNeeded) {
        if(rawPool.length > 0) {
            let src = rawPool[pool.length % rawPool.length];
            // Cloning to avoid duplicate ID issues
            let clone = JSON.parse(JSON.stringify(src));
            clone.id = 5000 + counter;
            
            // Gerando ligeira variacao de texto para simular um grande banco
            if(counter > rawPool.length) {
                clone.text = "[Variante] " + clone.text;
            }
            pool.push(clone);
            counter++;
        } else {
            break; // Failsafe se não existir nenhuma pergunta daquela dificuldade
        }
    }
    
    return pool.sort(() => Math.random() - 0.5);
}

// Quando um módulo for solicitado com uma dificuldade, devolve a array construída:
function getModuleData(moduleId, difficulty) {
    let specifics = [];
    if(moduleId === 'analises') specifics = qAnalises;
    else if(moduleId === 'farmacia') specifics = qFarmacia;
    else if(moduleId === 'radiologia') specifics = qRadiologia;
    else if(moduleId === 'fisioterapia') specifics = qFisioterapia;
    else if(moduleId === 'gerais') specifics = [];
    else if(moduleId === 'misto') specifics = [...qAnalises, ...qFarmacia, ...qRadiologia, ...qFisioterapia];

    return buildCategory(specifics, 50, difficulty);
}
