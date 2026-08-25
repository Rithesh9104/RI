export type Project = {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  alt: string;
  span: 'tall' | 'wide' | 'normal';
};

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Living Room',
    category: 'Living Rooms',
    location: 'Coimbatore',
    image: 'https://images.pexels.com/photos/28254549/pexels-photo-28254549.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Sophisticated modern living room with elegant furniture and minimalist design',
    span: 'tall',
  },
  {
    id: 'p2',
    title: 'Modular Kitchen',
    category: 'Kitchens',
    location: 'Coimbatore',
    image: 'https://images.pexels.com/photos/7031211/pexels-photo-7031211.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Contemporary kitchen with gray marble island countertop and hanging lamps',
    span: 'normal',
  },
  {
    id: 'p3',
    title: 'Bedroom',
    category: 'Bedrooms',
    location: 'Coimbatore',
    image: 'https://images.pexels.com/photos/27164976/pexels-photo-27164976.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Modern minimalist bedroom with plush bed and elegant pendant lighting',
    span: 'normal',
  },
  {
    id: 'p4',
    title: 'Home Interior',
    category: 'Homes',
    location: 'Coimbatore',
    image: 'https://images.pexels.com/photos/39134573/pexels-photo-39134573.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Stylish modern living room with beige sofa and rich wood furniture',
    span: 'wide',
  },
  {
    id: 'p5',
    title: 'Office Interior',
    category: 'Offices',
    location: 'Coimbatore',
    image: 'https://images.pexels.com/photos/7511754/pexels-photo-7511754.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Light conference room with armchairs, plants and shelves',
    span: 'normal',
  },
  {
    id: 'p6',
    title: 'Dining Space',
    category: 'Homes',
    location: 'Coimbatore',
    image: 'https://images.pexels.com/photos/27562217/pexels-photo-27562217.png?auto=compress&cs=tinysrgb&w=900',
    alt: 'Contemporary dining room with stylish lighting and wood accents',
    span: 'tall',
  },
  {
    id: 'p7',
    title: 'Kitchen Detail',
    category: 'Kitchens',
    location: 'Coimbatore',
    image: 'https://images.pexels.com/photos/18285887/pexels-photo-18285887.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Modern kitchen with dark wood cabinets and marble countertops',
    span: 'normal',
  },
  {
    id: 'p8',
    title: 'Bedroom Suite',
    category: 'Bedrooms',
    location: 'Coimbatore',
    image: 'https://images.pexels.com/photos/8135118/pexels-photo-8135118.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Spacious bedroom with plush pillows, chandelier and dresser',
    span: 'wide',
  },
  {
    id: 'p9',
    title: 'Lounge',
    category: 'Living Rooms',
    location: 'Coimbatore',
    image: 'https://images.pexels.com/photos/27059631/pexels-photo-27059631.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Elegant living room with minimalist decor and warm lighting',
    span: 'normal',
  },
];

export const projectCategories = ['All', 'Homes', 'Kitchens', 'Bedrooms', 'Living Rooms', 'Offices'] as const;
