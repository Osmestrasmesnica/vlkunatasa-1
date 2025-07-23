// Language content
const content = {
    de: {
        nav: {
            home: 'Home',
            gallery: 'Gallery',
            about: 'Über mich',
            contact: 'Kontakt'
        },
        gallery: {
            colorful: 'Farbige Werke',
            blackwhite: 'Schwarz-Weiss Werke',
            older: 'Ältere Werke'
        },
        about: {
            title: 'Über mich',
            content: `<p><strong>Natasa Vlku</strong></p>
            <p>1993 in Negotin, Serbien geboren - lebt und arbeitet in Saalfelden am Steinernen Meer.</p>
            <br>
            <p>In ihren Bildern zeigt Natasa die stille, oft übersehene Schönheit der Natur. Tiere, Pflanzen und feine Muster verbinden sich zu Kompositionen, die zwischen genauer Beobachtung und träumerischer Vorstellung schweben. Ihre Werke wirken ruhig, klar und zugleich geheimnisvoll – wie ein Blick in eine andere Welt.</p>
            <br>
            <p>Ihre bevorzugte Technik ist eine Mischung aus Gouache, Farbstiften und Finelinern. Die Liebe zu Gouachefarben entdeckte sie bereits in ihrer Schulzeit an der Modeschule Hallein – dort kam sie nicht nur erstmals mit diesem Medium in Berührung, sondern entwickelte auch ein feines Gespür für Muster, Strukturen und kleine Details, geprägt durch das gestalterische Arbeiten mit Textilien: vom Modeentwurf über die Näharbeit bis hin zum fertigen Kleidungsstück. Diese gestalterische Präzision und Liebe zum Detail prägt auch ihre heutigen Arbeiten.</p>
            <br>
            <p>Mit viel Geduld und Hingabe entstehen farbenreiche Szenen, die von Verletzlichkeit, Artenvielfalt und der Sehnsucht nach Ruhe erzählen. Ihre Bilder sind ein stiller Gegenpol zur Reizüberflutung des Alltags – eine Einladung, hinzusehen und durchzuatmen.</p>
            <br>
            <p>Die Natur ist für sie dabei mehr als nur ein Motiv. Sie ist Quelle der Inspiration, eine Welt voller Farben, Muster und Formen, die sie zeichnerisch erkundet. Auch im Alltag sucht sie bewusst die Nähe zur Natur – etwa bei Spaziergängen durch den Wald oder beim Bepflanzen ihres Gartens mit neuen Blumen. In diesen Momenten entstehen oft erste Bildideen.</p>
            <br>
            <p>Besonders häufig finden sich in ihren Arbeiten Vögel und Schmetterlinge – zarte Wesen, die sowohl für Verletzlichkeit als auch für Leichtigkeit stehen. Ihre fragile Schönheit fasziniert sie ebenso wie ihre Freiheit, sich schwerelos durch Raum und Landschaft zu bewegen.</p>
            <br>
            <p>Ergänzend zu den farbintensiven Werken entstehen auch schwarz-weisse Illustrationen. In ihrer Reduktion setzen sie einen ruhigen Kontrast zur Farbenvielfalt – feine Linien, Schattierungen und Strukturen rücken hier in den Mittelpunkt und eröffnen eine andere Art der Betrachtung.</p>
            <br>
            <p>Neben ihrer künstlerischen Arbeit ist Natasa auch als Pädagogin tätig. In ihrem beruflichen Alltag mit Kindern teilt sie ihre gestalterische Neugier – besonders im kreativen Arbeiten und gemeinsamen Ausprobieren.</p>
            <br>
            <p>Im Herbst 2025 ist ihre erste öffentliche Ausstellung im Congress Saalfelden geplant. Zu sehen ist eine Auswahl detailreicher Arbeiten, die sich der Vielfalt und Zerbrechlichkeit der Natur widmen – und dazu einladen, ihr mit mehr Achtsamkeit und Staunen zu begegnen.</p>`,
            quote: '"Ein Moment in der Natur – und die Ideen flattern durch den Kopf wie Schmetterlinge."'
        },
        contact: {
            title: 'Schreib mir!',
            subtitle: 'Nutze dieses Formular, um mir eine Nachricht zu schreiben - ich melde mich so bald wie möglich!',
            name: 'Name:',
            email: 'E-Mail:',
            subject: 'Betreff:',
            message: 'Nachricht:',
            send: 'Senden'
        }
    },
    en: {
        nav: {
            home: 'Home',
            gallery: 'Gallery',
            about: 'About',
            contact: 'Contact'
        },
        gallery: {
            colorful: 'Colorful Works',
            blackwhite: 'Black & White Works',
            older: 'Older Works'
        },
        about: {
            title: 'About',
            content: `<p><strong>Natasa Vlku</strong></p>
            <p>Born in 1993 in Negotin, Serbia – lives and works in Saalfelden am Steinernen Meer, Austria.</p>
            <br>
            <p>In her work, Natasa explores the quiet, often overlooked beauty of nature. Animals, plants, and delicate patterns come together in compositions that float between precise observation and dreamlike imagination. Her pieces appear calm, clear, and at the same time mysterious – like a glimpse into another world.</p>
            <br>
            <p>Her preferred technique combines gouache, colored pencils, and fineliners. She first discovered her love for gouache during her school years at the fashion school in Hallein – where she not only encountered the medium for the first time but also developed a keen sense for patterns, textures, and subtle details, shaped by working creatively with textiles: from designing garments to sewing and completing finished pieces. This attention to detail and sensitivity continues to shape her artistic work today.</p>
            <br>
            <p>With patience and care, she creates vibrant scenes that speak of fragility, biodiversity, and a longing for stillness. Her images offer a quiet counterpoint to the sensory overload of everyday life – an invitation to pause and truly look.</p>
            <br>
            <p>For Natasa, nature is more than just a motif. It is a source of inspiration – a world full of colors, shapes, and intricate structures that she explores through drawing. In her daily life, she consciously seeks closeness to the natural world – whether walking through forests or tending to her garden, planting new flowers and taking joy in their colorful diversity. These moments often spark the first ideas for her images.</p>
            <br>
            <p>Birds and butterflies frequently appear in her work – delicate creatures that symbolize both vulnerability and lightness. Their fragile beauty captivates her, as does their freedom to move effortlessly through space and landscape.</p>
            <br>
            <p>Alongside her colorful compositions, she also creates black-and-white illustrations. In their reduction, they offer a calm contrast to her more vibrant works – focusing on fine lines, shading, and structure, and opening a different kind of visual experience.</p>
            <br>
            <p>In addition to her artistic practice, Natasa works as an educator. In her daily work with children, she shares her creative curiosity – especially through hands-on experimentation and artistic exploration.</p>
            <br>
            <p>Her first public exhibition is planned for autumn 2025 at the Congress Saalfelden. On display will be a selection of detailed works that explore the beauty and fragility of nature – and invite viewers to encounter it with greater awareness and wonder.</p>`,
            quote: '"A moment in nature – and the ideas flutter through the mind like butterflies."'
        },
        contact: {
            title: 'Get in touch!',
            subtitle: 'Use the form below to send a message - I\'ll get back to you as soon as possible!',
            name: 'Name:',
            email: 'E-Mail:',
            subject: 'Subject:',
            message: 'Message:',
            send: 'Send'
        }
    }
};

// Gallery data
const galleryData = {
    colorful: [
        { id: 11, title: 'Das Baumdorf', titleEn: 'Das Baumdorf', subtitle: '', size: '70x100cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image: 'assets/gallery/Farbige/picture-11.JPG' },
        { id: 10, title: 'Blauracken', titleEn: 'European Roller', subtitle: 'Where Rollers Roam', size: '42x56cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image: 'assets/gallery/Farbige/picture-10.JPG' },
        { id: 9, title: 'Motten', titleEn: 'Moths', subtitle: 'The Night\'s Mosaic', size: '42x56cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image: 'assets/gallery/Farbige/picture-9.JPG' },
        { id: 8, title: 'Eisvögel', titleEn: 'Kingfishers', subtitle: 'Petal Dive', size: '42x56cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image: 'assets/gallery/Farbige/picture-8.JPG' },
        { id: 7, title: 'Schmetterlinge', titleEn: 'Butterflies', subtitle: 'The Day\'s Mosaic', size: '42x56cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image: 'assets/gallery/Farbige/picture-7.JPG' },
        { id: 6, title: 'Steinbock', titleEn: 'Ibex', subtitle: 'Alpine Still Life', size: '42x56cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image: 'assets/gallery/Farbige/picture-6.JPG' },
        { id: 5, title: 'Wildschaf', titleEn: 'Wild Sheep', subtitle: 'The Ram\'s Garden', size: '42x56cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image: 'assets/gallery/Farbige/picture-5.JPG' },
        { id: 4, title: 'Kanarienvögel', titleEn: 'Canaries', subtitle: 'Der Ast der Eitelkeit', size: '30x40cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image: 'assets/gallery/Farbige/picture-4.JPG' },
        { id: 3, title: 'Schlange', titleEn: 'Snake', subtitle: 'Der ungeliebte Strauss', size: '42x56cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image: 'assets/gallery/Farbige/picture-3.JPG' },
        { id: 2, title: 'Papageien', titleEn: 'Parrots', subtitle: 'The Orchard Watchers', size: '30x40cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image: 'assets/gallery/Farbige/picture-2.JPG' },
        { id: 1, title: 'Giraffe', titleEn: 'Giraffe', subtitle: 'The Tall Watcher', size: '42x56cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image: 'assets/gallery/Farbige/picture-1.JPG' }
    ],
    blackwhite: [
        { id: 39, title: 'Steinbock', titleEn: 'Ibex', subtitle: 'Sie tragen den Sturm in Blüten', size: '42x59,4cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-39.JPG' },
        { id: 38, title: 'Hirsch', titleEn: 'Deer', subtitle: 'Wenn Bäume träumen könnten', size: '42x59,4cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-38.JPG' },
        { id: 37, title: 'Wildschaf', titleEn: 'Wild Sheep', subtitle: 'Und aus Stille wird Duft', size: '42x59,4cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-37.JPG' },
        { id: 36, title: 'Sumpfmeisen', titleEn: 'Marsh Tits', subtitle: 'Tanz der Meisen', size: '42x59,4cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-36.JPG' },
        { id: 35, title: 'Schwalbe', titleEn: 'Swallow', subtitle: 'Flug über Oleander', size: '42x59,4cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-35.JPG' },
        { id: 34, title: 'Schlange', titleEn: 'Snake', subtitle: 'Die List im Duft', size: '42x59,4cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-34.JPG' },
        { id: 33, title: 'Kohlmeise', titleEn: 'Great Tit', subtitle: 'Im Aufbruch', size: '42x59,4cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-33.JPG' },
        { id: 32, title: 'Hortensie', titleEn: 'Hydrangea', subtitle: 'Dekoration', size: '42x59,4cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-32.JPG' },
        { id: 31, title: 'Selva Cacique', titleEn: 'Selva Cacique', subtitle: '', size: '20x30cm', medium: 'Fineliner on transparent paper', mediumDe: 'Fineliner auf Transparentpapier', image:'assets/gallery/Schwarz-Weiss/picture-31.JPG' },
        { id: 30, title: 'Serendib Scops Owl', titleEn: 'Serendib Scops Owl', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-30.JPG' },
        { id: 29, title: 'Carp', titleEn: 'Carp', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-29.JPG' },
        { id: 28, title: 'Caribou', titleEn: 'Caribou', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-28.JPG' },
        { id: 27, title: 'Blue Whale', titleEn: 'Blue Whale', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-27.JPG' },
        { id: 26, title: 'Ibis', titleEn: 'Ibis', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-26.JPG' },
        { id: 25, title: 'Siberian Crane', titleEn: 'Siberian Crane', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-25.JPG' },
        { id: 24, title: 'White Winged Magpie', titleEn: 'White Winged Magpie', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-24.JPG' },
        { id: 23, title: 'Saguaro Cactus', titleEn: 'Saguaro Cactus', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-23.JPG' },
        { id: 22, title: 'Wild Water Buffalo', titleEn: 'Wild Water Buffalo', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-22.JPG' },
        { id: 21, title: 'Asian Elephant', titleEn: 'Asian Elephant', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-21.JPG' },
        { id: 20, title: 'Red Wolf', titleEn: 'Red Wolf', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-20.JPG' },
        { id: 19, title: 'Pangolin', titleEn: 'Pangolin', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-19.JPG' },
        { id: 18, title: 'Hainan Hare', titleEn: 'Hainan Hare', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-18.JPG' },
        { id: 17, title: 'Monarch Butterfly', titleEn: 'Monarch Butterfly', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-17.JPG' },
        { id: 16, title: 'Baobab Tree', titleEn: 'Baobab Tree', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-16.JPG' },
        { id: 15, title: 'Sea Turtle', titleEn: 'Sea Turtle', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-15.JPG' },
        { id: 14, title: 'Blakiston\'s Fish Owl', titleEn: 'Blakiston\'s Fish Owl', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-14.JPG' },
        { id: 13, title: 'Axolotl', titleEn: 'Axolotl', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-13.JPG' },
        { id: 12, title: 'South China Tiger', titleEn: 'South China Tiger', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-12.JPG' },
        { id: 11, title: 'Pacific Pocket Mouse', titleEn: 'Pacific Pocket Mouse', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-11.JPG' },
        { id: 10, title: 'Dragon Tree', titleEn: 'Dragon Tree', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-10.JPG' },
        { id: 9, title: 'Red Crowned Crane', titleEn: 'Red Crowned Crane', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-9.JPG' },
        { id: 8, title: 'Whale Shark', titleEn: 'Whale Shark', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-8.JPG' },
        { id: 7, title: 'Cirroctopus Hochbergi', titleEn: 'Cirroctopus Hochbergi', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-7.JPG' },
        { id: 6, title: 'Darwin\'s Fox', titleEn: 'Darwin\'s Fox', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-6.JPG' },
        { id: 5, title: 'Indian Rhinoceros', titleEn: 'Indian Rhinoceros', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-5.JPG' },
        { id: 4, title: 'Eastern Bog Turtle', titleEn: 'Eastern Bog Turtle', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-4.JPG' },
        { id: 3, title: 'Giant Sequoia', titleEn: 'Giant Sequoia', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-3.JPG' },
        { id: 2, title: 'Firefly', titleEn: 'Firefly', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-2.JPG' },
        { id: 1, title: 'Hummingbird', titleEn: 'Hummingbird', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Schwarz-Weiss/picture-1.JPG' }
    ],
    older: [
        { id: 1, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-1.jpg' },
        { id: 2, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-2.jpg' },
        { id: 3, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-3.jpg' },
        { id: 4, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-4.jpg' },
        { id: 5, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-5.jpg' },
        { id: 6, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-6.jpg' },
        { id: 7, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-7.jpg' },
        { id: 8, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-8.jpg' },
        { id: 9, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-9.jpg' },
        { id: 10, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-10.jpg' },
        { id: 11, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-11.jpg' },
        { id: 12, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-12.jpg' },
        { id: 13, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-13.jpg' },
        { id: 14, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-14.jpg' },
        { id: 15, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-15.jpg' },
        { id: 16, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-16.jpg' },
        { id: 17, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-17.jpg' },
        { id: 18, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-18.jpg' },
        { id: 19, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-19.jpg' },
        { id: 20, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-20.jpg' },
        { id: 21, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-21.jpg' },
        { id: 22, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-22.jpg' },
        { id: 23, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-23.jpg' },
        { id: 24, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-24.jpg' },
        { id: 25, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-25.jpg' },
        { id: 26, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-26.jpg' },
        { id: 27, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-27.jpg' },
        { id: 28, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-28.jpg' },
        { id: 29, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-29.jpg' },
        { id: 30, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-30.jpg' },
        { id: 31, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-31.jpg' },
        { id: 32, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-32.jpg' },
        { id: 33, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-33.jpg' },
        { id: 34, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-34.jpg' },
        { id: 35, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-35.jpg' },
        { id: 36, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-36.jpg' },
        { id: 37, title: 'Ältere Werke', titleEn: 'Older Works', subtitle: '', size: '20x30cm', medium: 'Mixed Media on paper', mediumDe: 'Mischtechnik auf Papier', image:'assets/gallery/Ältere/picture-37.jpg' },
    ]
};
