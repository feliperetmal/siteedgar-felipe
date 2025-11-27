import { Service, Testimonial, TeamMember, NavItem, ComparisonItem, StageItem } from './types';
import { Hammer, Sprout, Scissors, Users, GraduationCap, Home, Heart, Brain, Hand, BookOpen, Clock, Activity, Palette, Smile } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
    { label: 'Início', path: '/' },
    { label: 'Quem Somos', path: '/sobre' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'O Método', path: '/metodo' },
    { label: 'Depoimentos', path: '/depoimentos' },
];

export const SERVICES: Service[] = [
    {
        id: 1,
        title: 'Marcenaria Pedagógica',
        description: 'Desenvolve força de vontade, foco e motricidade fina através da transformação da madeira.',
        details: 'A marcenaria na pedagogia Waldorf não é apenas técnica; é uma "escola de vontade". Ao transformar a madeira bruta em objetos úteis, o aluno aprende resiliência, planejamento sequencial e a importância do processo. Cada lixada ensina paciência; cada projeto concluído fortalece a autoestima e a capacidade de resolver problemas reais.',
        image: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&q=80&w=800',
        icon: Hammer
    },
    {
        id: 2,
        title: 'Horta Escolar & Jardinagem',
        description: 'Conexão profunda com a terra, ciclos naturais, biologia prática e alimentação saudável.',
        details: 'Nossa consultoria implementa hortas que funcionam como laboratórios vivos. As crianças aprendem biologia, química e meteorologia colocando as mãos na terra. O cuidado constante com o jardim desperta a responsabilidade ecológica, a paciência de esperar o tempo da natureza e a gratidão pelo alimento, integrando o currículo acadêmico à vida real.',
        image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800',
        icon: Sprout
    },
    {
        id: 3,
        title: 'Trabalhos Manuais',
        description: 'Tricô, crochê, costura e modelagem para desenvolvimento cognitivo e matemático.',
        details: 'A neurociência comprova o que a pedagogia Waldorf pratica há décadas: mãos ágeis criam mentes ágeis. O trabalho manual desenvolve o pensamento lógico, a contagem rítmica e a geometria prática. Além disso, atividades como tricotar acalmam o sistema nervoso, melhoram a concentração e preparam o cérebro para tarefas intelectuais complexas.',
        image: 'https://images.unsplash.com/photo-1603651982642-3cdcb241e343?auto=format&fit=crop&q=80&w=800',
        icon: Scissors
    },
    {
        id: 4,
        title: 'Escola de Pais',
        description: 'Integração real entre família e escola para criar uma comunidade forte e coerente.',
        details: 'Criamos pontes duradouras entre o ambiente doméstico e o escolar. Oferecemos palestras, vivências e rodas de conversa que ajudam os pais a compreenderem as fases do desenvolvimento infantil. Isso alinha valores, melhora a rotina de sono e alimentação em casa e fortalece a rede de apoio da escola, reduzindo conflitos.',
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
        icon: Users
    },
    {
        id: 5,
        title: 'Formação Docente Humanizada',
        description: 'Treinamento intensivo sobre ritmo, olhar pedagógico e autoeducação do professor.',
        details: 'O professor é a ferramenta mais importante da educação. Nossos treinamentos não focam apenas em conteúdo, mas no desenvolvimento interior do docente. Trabalhamos a arte de contar histórias, a gestão rítmica da sala de aula, a observação fenomenológica da criança e técnicas para evitar o burnout docente.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800',
        icon: GraduationCap
    },
    {
        id: 6,
        title: 'Arquitetura & Ambiente',
        description: 'Transformação de espaços em salas acolhedoras que reduzem o estresse e favorecem o foco.',
        details: 'O ambiente educa tanto quanto o professor. Ajudamos a repensar a estética da escola: o uso de cores terapêuticas, iluminação adequada, materiais naturais e a disposição do mobiliário. Criamos espaços que "respiram" e acolhem, reduzindo a agitação motora e promovendo um estado de atenção relaxada nos alunos.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
        icon: Home
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Roberto Mendes',
        role: 'Diretor Escolar',
        text: 'A consultoria transformou o clima da escola. Os alunos estão visivelmente mais calmos e engajados nas atividades práticas. Foi a melhor decisão que tomamos este ano para a nossa instituição.',
        rating: 5,
        category: 'Educadores',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 2,
        name: 'Carla Souza',
        role: 'Mãe de Aluno',
        text: 'Meu filho voltou a ter brilho nos olhos. As oficinas de marcenaria fizeram ele desenvolver uma capacidade de foco que eu não via antes. Agradeço por trazerem vida para a educação.',
        rating: 5,
        category: 'Pais',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 3,
        name: 'Lucas Brandão',
        role: 'Aluno (8º ano)',
        text: 'Agora a escola faz sentido. Aprendo matemática construindo coisas reais na horta e na oficina. Não é só decorar fórmulas, é viver o aprendizado de verdade.',
        rating: 5,
        category: 'Alunos',
        avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 4,
        name: 'André Lima',
        role: 'Professor',
        text: 'A formação de professores foi um divisor de águas na minha carreira. Reaprendi a olhar para o aluno como um ser integral e recuperei minha paixão por ensinar.',
        rating: 5,
        category: 'Educadores',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 5,
        name: 'Fernanda Gomes',
        role: 'Coordenadora',
        text: 'Reduzimos o estresse em sala de aula em 40% com as novas práticas rítmicas sugeridas pelo Felipe e pelo Edgar. O ambiente escolar nunca esteve tão harmônico.',
        rating: 5,
        category: 'Educadores',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 6,
        name: 'João Pereira',
        role: 'Pai',
        text: 'Nunca vi meu filho tão interessado em aprender. O ambiente acolhedor que vocês ajudaram a criar faz toda a diferença no desenvolvimento dele.',
        rating: 5,
        category: 'Pais',
        avatar: 'https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 7,
        name: 'Mariana Costa',
        role: 'Professora de Artes',
        text: 'A introdução dos trabalhos manuais no currículo regular trouxe uma calma para as turmas agitadas que parecia impossível antes. É terapêutico para todos.',
        rating: 5,
        category: 'Educadores',
        avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 8,
        name: 'Sofia Martins',
        role: 'Aluna (Ensino Médio)',
        text: 'Me sinto ouvida e respeitada. A escola deixou de ser um lugar de pressão para ser um lugar de descoberta sobre quem eu sou.',
        rating: 5,
        category: 'Alunos',
        avatar: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 9,
        name: 'Ricardo Oliveira',
        role: 'Pai de Gêmeos',
        text: 'A mudança no comportamento dos meus filhos em casa foi nítida. Estão mais criativos, brincam mais juntos e dependem muito menos de telas e celulares.',
        rating: 5,
        category: 'Pais',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 10,
        name: 'Beatriz Silva',
        role: 'Pedagoga',
        text: 'O suporte estratégico do Edgar foi essencial para convencermos a mantenedora a investir na humanização. Os resultados financeiros e pedagógicos vieram rápido.',
        rating: 4,
        category: 'Educadores',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 11,
        name: 'Pedro Santos',
        role: 'Aluno (6º ano)',
        text: 'A aula de marcenaria é minha favorita. Fiz uma colher de pau para minha mãe e ela chorou de emoção. Eu me senti muito capaz.',
        rating: 5,
        category: 'Alunos',
        avatar: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 12,
        name: 'Cláudia Ramos',
        role: 'Mãe',
        text: 'Finalmente uma escola que olha para o emocional e não só para o vestibular. Isso prepara para a vida, cria adultos saudáveis e equilibrados.',
        rating: 5,
        category: 'Pais',
        avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 13,
        name: 'Gustavo Dias',
        role: 'Professor de História',
        text: 'Integrar teatro nas aulas de história fez os alunos decorarem menos e entenderem muito mais os contextos e sentimentos das épocas.',
        rating: 5,
        category: 'Educadores',
        avatar: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 14,
        name: 'Helena Rocha',
        role: 'Aluna (9º ano)',
        text: 'Eu odiava a escola antiga. Aqui eu sinto que posso ser eu mesma, sem julgamentos, apenas aprendendo no meu ritmo.',
        rating: 5,
        category: 'Alunos',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 15,
        name: 'Fábio Moreira',
        role: 'Diretor Administrativo',
        text: 'Tinha receio sobre a viabilidade financeira, mas o projeto se pagou com a redução da evasão escolar. A satisfação dos pais aumentou a retenção.',
        rating: 4,
        category: 'Educadores',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 16,
        name: 'Patrícia Albuquerque',
        role: 'Mãe',
        text: 'A "Escola de Pais" nos ajudou a alinhar a rotina de casa com a da escola. Dormir cedo e criar rituais familiares mudou tudo.',
        rating: 5,
        category: 'Pais',
        avatar: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 17,
        name: 'Thiago Farias',
        role: 'Aluno (3º ano EM)',
        text: 'Vou fazer vestibular tranquilo. Aprendi a pensar por conta própria, não sou um robô de fazer provas. Me sinto preparado para o mundo.',
        rating: 5,
        category: 'Alunos',
        avatar: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 18,
        name: 'Larissa Azevedo',
        role: 'Professora do Jardim',
        text: 'O resgate do brincar livre foi a coisa mais linda que aconteceu na nossa escola. As crianças voltaram a ser crianças.',
        rating: 5,
        category: 'Educadores',
        avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 19,
        name: 'Bruno Costa',
        role: 'Pai',
        text: 'Investimento que vale cada centavo. Ver meu filho feliz indo para a escola, sem chorar, não tem preço que pague.',
        rating: 5,
        category: 'Pais',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&h=100'
    },
    {
        id: 20,
        name: 'Renata Lima',
        role: 'Orientadora Educacional',
        text: 'Os casos de bullying diminuíram drasticamente com as atividades de integração e arte. A empatia floresceu entre os alunos.',
        rating: 5,
        category: 'Educadores',
        avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100'
    }
];

export const TEAM: TeamMember[] = [
    {
        name: 'Felipe Kauffman',
        role: 'Consultor Pedagógico',
        description: 'Ex-aluno Waldorf com vivência prática profunda. Traz a experiência de quem viveu o método desde a infância e compreende suas nuances no dia a dia.',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=400&h=400' 
    },
    {
        name: 'Edgar Chalom',
        role: 'Estrategista Educacional',
        description: 'Estudante da Umanut com visão sistêmica. Foca na viabilidade da implementação e na gestão humanizada dos processos escolares.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=400&h=400'
    }
];

export const METHODOLOGY_STEPS = [
    {
        title: 'PENSAR',
        subtitle: 'Clareza Intelectual',
        description: 'O conhecimento não deve ser decorado, mas compreendido. Buscamos a clareza mental sem pressa, respeitando a maturação neurológica da criança.',
        icon: Brain,
        color: 'text-waldorf-primary',
        bg: 'bg-blue-50'
    },
    {
        title: 'SENTIR',
        subtitle: 'Equilíbrio Emocional',
        description: 'A arte é a ponte. Música, pintura e teatro educam os sentimentos, criando seres humanos empáticos e socialmente inteligentes.',
        icon: Heart,
        color: 'text-waldorf-accent',
        bg: 'bg-yellow-50'
    },
    {
        title: 'QUERER',
        subtitle: 'Força de Vontade',
        description: 'Aprender fazendo. O movimento e o trabalho manual transformam intenção em ação, fortalecendo a resiliência para a vida adulta.',
        icon: Hand,
        color: 'text-waldorf-green',
        bg: 'bg-green-50'
    }
];

export const COMPARISON_DATA: ComparisonItem[] = [
    {
        aspect: "Foco Principal",
        traditional: "Conteúdo Acadêmico e Vestibular",
        waldorf: "Desenvolvimento Humano Integral",
        icon: BookOpen
    },
    {
        aspect: "Ritmo de Aprendizado",
        traditional: "Linear, igual para todos, acelerado",
        waldorf: "Respeita ciclos biológicos (Setênios)",
        icon: Clock
    },
    {
        aspect: "Avaliação",
        traditional: "Notas, provas e ranking",
        waldorf: "Qualitativa, olhar individualizado",
        icon: Activity
    },
    {
        aspect: "Papel da Arte",
        traditional: "Disciplina secundária ou recreativa",
        waldorf: "Base de todo aprendizado (Matemática, História...)",
        icon: Palette
    },
    {
        aspect: "Ambiente",
        traditional: "Padronizado, foco na lousa",
        waldorf: "Acolhedor, materiais naturais, estético",
        icon: Smile
    }
];

export const DEVELOPMENT_STAGES: StageItem[] = [
    {
        age: "0 a 7 anos",
        title: "Primeiro Setênio",
        focus: "O QUERER (Fazer)",
        description: "A criança é um órgão sensorial. Aprende por imitação. O foco é desenvolver o corpo físico, a coordenação e a vontade através do brincar livre.",
        icon: Hand,
        color: "bg-red-50 text-red-600 border-red-200"
    },
    {
        age: "7 a 14 anos",
        title: "Segundo Setênio",
        focus: "O SENTIR (Coração)",
        description: "A alfabetização dos sentimentos. O professor é a autoridade amada. Todo conteúdo acadêmico entra através da beleza e da arte.",
        icon: Heart,
        color: "bg-yellow-50 text-yellow-600 border-yellow-200"
    },
    {
        age: "14 a 21 anos",
        title: "Terceiro Setênio",
        focus: "O PENSAR (Cabeça)",
        description: "Nascimento do julgamento próprio. Busca pela verdade. O jovem precisa de tutores que sejam mestres em suas áreas para desafiar seu intelecto.",
        icon: Brain,
        color: "bg-blue-50 text-blue-600 border-blue-200"
    }
];