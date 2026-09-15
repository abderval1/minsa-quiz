const baseGerais = [
    { id: 1, text: 'De acordo com a Pauta Deontológica da Função Pública, o dever de isenção implica:', type: 'single', options: [{ id: 'a', text: 'Favorecer amigos' }, { id: 'b', text: 'Não ter interesses financeiros nas decisões que toma' }, { id: 'c', text: 'Receber presentes de utentes' }, { id: 'd', text: 'Trabalhar apenas de manhã' }], correctAnswers: ['b'] },
    { id: 2, text: 'No Censo 2024, qual é a principal finalidade para o Ministério da Saúde?', type: 'single', options: [{ id: 'a', text: 'Cobrar taxas hospitalares' }, { id: 'b', text: 'Mapeamento demográfico para alocação de recursos sanitários' }, { id: 'c', text: 'Fecho de fronteiras' }, { id: 'd', text: 'Registo criminal' }], correctAnswers: ['b'] },
    { id: 3, text: 'A Nova Divisão Político-Administrativa de Angola (2024) visa fundamentalmente:', type: 'single', options: [{ id: 'a', text: 'Centralizar os hospitais' }, { id: 'b', text: 'Aproximar a governação e os serviços essenciais das populações locais' }, { id: 'c', text: 'Acabar com as administrações municipais' }, { id: 'd', text: 'Reduzir o número de médicos' }], correctAnswers: ['b'] },
    { id: 4, text: 'O que avalia primariamente o Inquérito de Indicadores Múltiplos e de Saúde (IIMS)?', type: 'multiple', options: [{ id: 'a', text: 'Mortalidade materno-infantil' }, { id: 'b', text: 'Nutrição e vacinação' }, { id: 'c', text: 'Produção agrícola' }, { id: 'd', text: 'Literacia digital' }], correctAnswers: ['a', 'b'] },
    { id: 5, text: 'Qual o papel da Inteligência Artificial na modernização hospitalar?', type: 'multiple', options: [{ id: 'a', text: 'Apoio ao diagnóstico por imagem' }, { id: 'b', text: 'Substituição integral de enfermeiros' }, { id: 'c', text: 'Gestão preditiva de stocks de farmácia' }, { id: 'd', text: 'Decisão ética final sobre a vida do doente' }], correctAnswers: ['a', 'c'] }
];

const diagnosticoEspecificas = [
    { id: 101, text: 'No Leucograma, a presença acentuada de Neutrófilos geralmente indica:', type: 'single', options: [{ id: 'a', text: 'Infecção viral' }, { id: 'b', text: 'Infecção bacteriana aguda' }, { id: 'c', text: 'Parasitose' }, { id: 'd', text: 'Alergia severa' }], correctAnswers: ['b'] },
    { id: 102, text: 'Qual das seguintes é uma técnica de Coloração fundamental em Microbiologia?', type: 'single', options: [{ id: 'a', text: 'Coloração de Gram' }, { id: 'b', text: 'Coloração de Newton' }, { id: 'c', text: 'Coloração de Doppler' }, { id: 'd', text: 'Hemoglobina Glicada' }], correctAnswers: ['a'] },
    { id: 103, text: 'Os eritrócitos (glóbulos vermelhos) têm como função principal:', type: 'single', options: [{ id: 'a', text: 'Combater infecções' }, { id: 'b', text: 'Coagulação sanguínea' }, { id: 'c', text: 'Transporte de oxigénio aos tecidos' }, { id: 'd', text: 'Produção de insulina' }], correctAnswers: ['c'] },
    { id: 104, text: 'A técnica de Autoclave para esterilização utiliza:', type: 'single', options: [{ id: 'a', text: 'Calor seco' }, { id: 'b', text: 'Calor húmido sob pressão' }, { id: 'c', text: 'Radiação UV' }, { id: 'd', text: 'Álcool a 70%' }], correctAnswers: ['b'] },
    { id: 105, text: 'O diagnóstico da Malária no laboratório faz-se primordialmente através de:', type: 'single', options: [{ id: 'a', text: 'Gota espessa e esfregaço sanguíneo' }, { id: 'b', text: 'Urocultura' }, { id: 'c', text: 'Raio-X do Tórax' }, { id: 'd', text: 'Eletrocardiograma' }], correctAnswers: ['a'] }
];

const condutorEspecificas = [
    { id: 201, text: 'Perante um acidente com feridos, qual é a primeira ação do condutor de ambulância?', type: 'single', options: [{ id: 'a', text: 'Acelerar para o hospital mais próximo' }, { id: 'b', text: 'Garantir a segurança do local e sinalizar a via' }, { id: 'c', text: 'Dar água aos feridos' }, { id: 'd', text: 'Tirar fotografias' }], correctAnswers: ['b'] },
    { id: 202, text: 'Segundo o Código de Estrada, o uso de sinais sonoros (sirene) pela ambulância:', type: 'single', options: [{ id: 'a', text: 'Pode ser usado sempre que o condutor quiser' }, { id: 'b', text: 'Só deve ser utilizado em marcha de urgência e prestação de socorro' }, { id: 'c', text: 'É obrigatório em autoestradas mesmo vazias' }, { id: 'd', text: 'Dá o direito de atropelar peões' }], correctAnswers: ['b'] },
    { id: 203, text: 'Na mecânica básica, a verificação do nível de óleo do motor deve ser feita com:', type: 'single', options: [{ id: 'a', text: 'O motor a trabalhar e quente' }, { id: 'b', text: 'O motor frio e o veículo num plano horizontal' }, { id: 'c', text: 'A ambulância em andamento' }, { id: 'd', text: 'O motor a rotações máximas' }], correctAnswers: ['b'] },
    { id: 204, text: 'A condução defensiva implica:', type: 'multiple', options: [{ id: 'a', text: 'Antecipar o perigo e as ações dos outros condutores' }, { id: 'b', text: 'Conduzir sempre acima do limite de velocidade' }, { id: 'c', text: 'Manter a distância de segurança' }, { id: 'd', text: 'Desrespeitar semáforos se não vier ninguém' }], correctAnswers: ['a', 'c'] },
    { id: 205, text: 'Em caso de furo de um pneu numa marcha de emergência, o condutor deve:', type: 'single', options: [{ id: 'a', text: 'Travar a fundo imediatamente' }, { id: 'b', text: 'Segurar firmemente o volante, reduzir a velocidade gradualmente e encostar na berma' }, { id: 'c', text: 'Largar o volante' }, { id: 'd', text: 'Acelerar para compensar a perda de pressão' }], correctAnswers: ['b'] }
];

const sociaisEspecificas = [
    { id: 301, text: 'Qual o papel fundamental do Assistente Social numa unidade hospitalar?', type: 'single', options: [{ id: 'a', text: 'Prescrever medicamentos' }, { id: 'b', text: 'Fazer o acolhimento, humanização e mediar o contexto sociofamiliar do paciente' }, { id: 'c', text: 'Realizar cirurgias' }, { id: 'd', text: 'Limpar as enfermarias' }], correctAnswers: ['b'] },
    { id: 302, text: 'O princípio da Autodeterminação no Serviço Social significa:', type: 'single', options: [{ id: 'a', text: 'Obrigar o utente a seguir o conselho do profissional' }, { id: 'b', text: 'Respeitar e promover o direito do utente a fazer as suas próprias escolhas' }, { id: 'c', text: 'Decidir tudo pelo paciente' }, { id: 'd', text: 'Apoiar apenas pacientes ricos' }], correctAnswers: ['b'] },
    { id: 303, text: 'A Abordagem Centrada na Pessoa no serviço social de saúde foca-se em:', type: 'multiple', options: [{ id: 'a', text: 'Empatia e aceitação incondicional' }, { id: 'b', text: 'Julgamento moral do comportamento do utente' }, { id: 'c', text: 'Compreensão do doente no seu contexto global (biopsicossocial)' }, { id: 'd', text: 'Isolamento da família no processo de cura' }], correctAnswers: ['a', 'c'] },
    { id: 304, text: 'Um dos grandes desafios sociais no tratamento do VIH/SIDA (segundo dados do IIMS) é:', type: 'single', options: [{ id: 'a', text: 'O estigma e a discriminação social' }, { id: 'b', text: 'A falta de água' }, { id: 'c', text: 'O excesso de centros de apoio' }, { id: 'd', text: 'O excesso de informação correta' }], correctAnswers: ['a'] },
    { id: 305, text: 'O Sigilo Profissional para o Assistente Social é:', type: 'single', options: [{ id: 'a', text: 'Opcional dependendo da gravidade do caso' }, { id: 'b', text: 'Um dever ético absoluto, essencial para manter a relação de confiança com o utente' }, { id: 'c', text: 'Proibido por lei' }, { id: 'd', text: 'Apenas recomendado se a família pedir' }], correctAnswers: ['b'] }
];

// Generate 50 questions per module by extending base questions
function generateModule(specifics, prefix) {
    let mod = [...baseGerais, ...specifics]; // starts with ~10 questions
    
    // Fill up to 50 using simulated variations for demonstration
    // Em ambiente real, o utilizador pode substituir estas pelas 50 perguntas reais.
    let currentId = 500;
    while(mod.length < 50) {
        mod.push({
            id: currentId++,
            text: `[Pergunta Simulação ${mod.length + 1}] - Qual é a melhor prática aplicável a este contexto da prova de ${prefix}?`,
            type: 'single',
            options: [
                { id: 'a', text: 'Analisar o caso com base no protocolo' },
                { id: 'b', text: 'Ignorar os procedimentos standard' },
                { id: 'c', text: 'Delegar a responsabilidade a um não-profissional' },
                { id: 'd', text: 'Nenhuma das opções' }
            ],
            correctAnswers: ['a']
        });
    }
    return mod;
}

const modulesData = {
    geral: generateModule([], 'Regime Geral'),
    diagnostico: generateModule(diagnosticoEspecificas, 'Téc. Diagnóstico'),
    sociais: generateModule(sociaisEspecificas, 'Assistentes Sociais'),
    condutor: generateModule(condutorEspecificas, 'Condutor de Ambulância')
};
