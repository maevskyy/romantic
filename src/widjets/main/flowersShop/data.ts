import magnolia from '../../../shared/assets/imgs/flowers/magnolia.jpg'
import daises from '../../../shared/assets/imgs/flowers/daises.webp'
import orchid from '../../../shared/assets/imgs/flowers/orchids.jpg'
import поле from '../../../shared/assets/imgs/flowers/полеебаное.jpg'
import tuplips from '../../../shared/assets/imgs/flowers/tulips.jpg'
import roses from '../../../shared/assets/imgs/flowers/roses.jpg'
import chryst from '../../../shared/assets/imgs/flowers/chryst.jpg'

type TFLower = Record<string, string | number>;

export const flowers: TFLower[] = [
    {
        id: 1,
        photo: magnolia,
        subtitle: 'Bouquet of magnolia',
        title: 'Violet Love',
        description:
            'Beautiful violet flowers arranged in a stunning bouquet. Perfect for expressing your love and admiration.',
        plants: 'Roses',
        qtyOfFlowers: 13,
    },
    {
        id: 2,
        photo: daises,
        subtitle: 'Bouquet of daisies',
        title: 'Sunshine Blooms',
        description:
            'A cheerful bouquet of daisies that brings the warmth of sunshine into any room. Brighten up your day!',
        plants: 'Daisies',
        qtyOfFlowers: 20,
    },
    {
        id: 3,
        photo: orchid,
        subtitle: 'Exotic Orchids Arrangement',
        title: 'Orchid Elegance',
        description:
            'Exquisite arrangement of exotic orchids, adding an element of elegance to any occasion.',
        plants: 'Orchids',
        qtyOfFlowers: 10,
    },
    {
        id: 4,
        photo: поле,
        subtitle: 'Wildflower Meadow Bouquet',
        title: 'Meadow Serenity',
        description:
            'A wildflower bouquet that captures the serenity of a meadow, bringing nature indoors.',
        plants: 'Wildflowers',
        qtyOfFlowers: 15,
    },
    {
        id: 5,
        photo: tuplips,
        subtitle: 'Tulip Garden Delight',
        title: 'Tulip Splendor',
        description:
            'Vibrant tulips arranged in a delightful bouquet, spreading joy and splendor to your space.',
        plants: 'Tulips',
        qtyOfFlowers: 18,
    },
    {
        id: 6,
        photo: roses,
        subtitle: 'Sunset Rose Bouquet',
        title: 'Golden Rose',
        description:
            'A romantic bouquet of roses in warm sunset hues, symbolizing love and passion.',
        plants: 'Roses',
        qtyOfFlowers: 12,
    },
    {
        id: 7,
        photo: chryst,
        subtitle: 'The Singleton Collection"',
        title: 'Bouquet of a Lonely Bloom',
        description:
            'Celebrate the laughter of spring with our Single Flower Bouquet collection. This unique bouquet features a gorgeous single flower that captures the spirit of spring in a single bloom..',
        plants: 'Chrysanthemum',
        qtyOfFlowers: 1,
        additonalStyles: 'shadow-yellow-300'
    },
];
