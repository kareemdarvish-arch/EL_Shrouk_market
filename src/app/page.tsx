'use client'

import { 
  Salad, 
  Beef, 
  Apple, 
  Milk, 
  Croissant, 
  CupSoda, 
  Sparkles, 
  Candy,
  ShoppingCart,
  Phone,
  MapPin,
  Clock,
  Truck,
  Percent,
  Star,
  Menu,
  Search,
  User,
  Heart,
  X,
  Crown,
  Users,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Moon,
  Sparkle,
  Gift
} from 'lucide-react'
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

// Product data with real image URLs
const categories = [
  {
    id: 'ramadan',
    name: 'عروض رمضان',
    nameEn: 'Ramadan Offers',
    icon: Moon,
    emoji: '🌙',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-950/50',
    borderColor: 'border-amber-600',
    iconColor: 'text-amber-400',
    gradientFrom: 'from-amber-600',
    gradientTo: 'to-amber-800',
    isSpecial: true,
    products: [
      { id: 101, name: 'تمر المدينة الفاخر', price: 120.00, oldPrice: 180.00, image: '/images/products/dates-medjool.png', discount: true, isRamadan: true },
      { id: 102, name: 'عصير مشمش - قمر الدين', price: 45.00, oldPrice: 65.00, image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=200&h=200&fit=crop', discount: true, isRamadan: true },
      { id: 103, name: 'كنافة ناعمة', price: 85.00, oldPrice: 110.00, image: 'https://images.unsplash.com/photo-1579888944880-d98341245702?w=200&h=200&fit=crop', discount: true, isRamadan: true },
      { id: 104, name: 'بقلاوة تركية', price: 95.00, oldPrice: 130.00, image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=200&h=200&fit=crop', discount: true, isRamadan: true },
      { id: 105, name: 'مكسرات مشكلة', price: 180.00, oldPrice: 250.00, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=200&h=200&fit=crop', discount: true, isRamadan: true },
      { id: 106, name: 'زبادي بالتمر', price: 35.00, oldPrice: 45.00, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop', discount: true, isRamadan: true },
      { id: 107, name: 'ساموسا محشية', price: 55.00, oldPrice: 75.00, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=200&h=200&fit=crop', discount: true, isRamadan: true },
      { id: 108, name: 'قطايف بالقشطة', price: 75.00, oldPrice: 95.00, image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=200&h=200&fit=crop', discount: true, isRamadan: true },
      { id: 109, name: 'بلح طازج', price: 65.00, oldPrice: 85.00, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&h=200&fit=crop', discount: true, isRamadan: true },
      { id: 110, name: 'مشروب خروب', price: 28.00, oldPrice: 38.00, image: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=200&h=200&fit=crop', discount: true, isRamadan: true },
      { id: 111, name: 'تمر السكري', price: 55.00, oldPrice: 75.00, image: '/images/products/dates-sukkari.png', discount: true, isRamadan: true },
      { id: 112, name: 'بسبوسة بالقشدة', price: 65.00, oldPrice: 85.00, image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=200&h=200&fit=crop', discount: true, isRamadan: true },
    ]
  },
  {
    id: 'vegetables',
    name: 'خضروات',
    nameEn: 'Vegetables',
    icon: Salad,
    emoji: '🥬',
    color: 'bg-green-600',
    lightColor: 'bg-green-950/50',
    borderColor: 'border-green-600',
    iconColor: 'text-green-400',
    gradientFrom: 'from-green-600',
    gradientTo: 'to-green-800',
    products: [
      { id: 1, name: 'طماطم طازجة', price: 25.00, oldPrice: 35.00, image: '/images/products/tomato.png', discount: true },
      { id: 2, name: 'خيار', price: 15.00, image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=200&h=200&fit=crop' },
      { id: 3, name: 'بطاطس', price: 18.00, image: '/images/products/potato.png' },
      { id: 4, name: 'جزر', price: 12.00, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=200&h=200&fit=crop' },
      { id: 5, name: 'بصل أحمر', price: 10.00, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=200&h=200&fit=crop' },
      { id: 6, name: 'ثوم طازج', price: 25.00, image: '/images/products/garlic.png' },
      { id: 7, name: 'فلفل أخضر', price: 18.00, image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=200&h=200&fit=crop' },
      { id: 8, name: 'باذنجان', price: 15.00, image: 'https://images.unsplash.com/photo-1528826007177-f38517ce9a8a?w=200&h=200&fit=crop' },
      { id: 9, name: 'كوسة', price: 14.00, image: 'https://images.unsplash.com/photo-1563252722-6434563a985d?w=200&h=200&fit=crop' },
      { id: 10, name: 'سبانخ', price: 12.00, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&h=200&fit=crop' },
    ]
  },
  {
    id: 'meat',
    name: 'لحوم',
    nameEn: 'Meat',
    icon: Beef,
    emoji: '🥩',
    color: 'bg-red-600',
    lightColor: 'bg-red-950/50',
    borderColor: 'border-red-600',
    iconColor: 'text-red-400',
    gradientFrom: 'from-red-600',
    gradientTo: 'to-red-800',
    products: [
      { id: 13, name: 'لحم بقري مفروم', price: 280.00, image: 'https://images.unsplash.com/photo-1602470520998-f4a52199a3d6?w=200&h=200&fit=crop' },
      { id: 14, name: 'صدور دجاج', price: 180.00, oldPrice: 220.00, image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=200&h=200&fit=crop', discount: true },
      { id: 15, name: 'لحم ضأن', price: 350.00, image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?w=200&h=200&fit=crop' },
      { id: 16, name: 'كبدة دجاج', price: 95.00, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&h=200&fit=crop' },
      { id: 17, name: 'لحم بتلو', price: 420.00, image: 'https://images.unsplash.com/photo-1588347818036-558601350947?w=200&h=200&fit=crop' },
      { id: 18, name: 'أفخاذ دجاج', price: 150.00, image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=200&h=200&fit=crop' },
      { id: 19, name: 'ريش لحم', price: 380.00, image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=200&h=200&fit=crop' },
      { id: 20, name: 'سجق بقري', price: 165.00, image: '/images/products/beef-sausage.png' },
    ]
  },
  {
    id: 'fruits',
    name: 'فواكه',
    nameEn: 'Fruits',
    icon: Apple,
    emoji: '🍎',
    color: 'bg-orange-600',
    lightColor: 'bg-orange-950/50',
    borderColor: 'border-orange-600',
    iconColor: 'text-orange-400',
    gradientFrom: 'from-orange-600',
    gradientTo: 'to-orange-800',
    products: [
      { id: 25, name: 'تفاح أحمر', price: 45.00, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&h=200&fit=crop' },
      { id: 26, name: 'موز', price: 35.00, image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop' },
      { id: 27, name: 'برتقال', price: 28.00, oldPrice: 38.00, image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=200&h=200&fit=crop', discount: true },
      { id: 28, name: 'عنب', price: 65.00, image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=200&h=200&fit=crop' },
      { id: 29, name: 'فراولة', price: 85.00, image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&h=200&fit=crop' },
      { id: 30, name: 'مانجو', price: 55.00, image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=200&h=200&fit=crop' },
      { id: 31, name: 'رمان', price: 45.00, image: '/images/products/pomegranate.png' },
      { id: 32, name: 'كيوي', price: 38.00, image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=200&h=200&fit=crop' },
      { id: 33, name: 'خوخ', price: 48.00, image: '/images/products/peach.png' },
      { id: 34, name: 'بطيخ', price: 25.00, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&h=200&fit=crop' },
      { id: 35, name: 'شمام', price: 30.00, image: '/images/products/cantaloupe.png' },
    ]
  },
  {
    id: 'dairy',
    name: 'ألبان',
    nameEn: 'Dairy',
    icon: Milk,
    emoji: '🥛',
    color: 'bg-blue-600',
    lightColor: 'bg-blue-950/50',
    borderColor: 'border-blue-600',
    iconColor: 'text-blue-400',
    gradientFrom: 'from-blue-600',
    gradientTo: 'to-blue-800',
    products: [
      { id: 37, name: 'حليب طازج', price: 32.00, image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop' },
      { id: 38, name: 'جبنة بيضاء', price: 85.00, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200&h=200&fit=crop' },
      { id: 39, name: 'زبادي', price: 18.00, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop' },
      { id: 40, name: 'زبدة', price: 65.00, oldPrice: 80.00, image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=200&h=200&fit=crop', discount: true },
      { id: 41, name: 'جبنة رومي', price: 95.00, image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=200&h=200&fit=crop' },
      { id: 42, name: 'قشطة طازجة', price: 45.00, image: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=200&h=200&fit=crop' },
      { id: 43, name: 'كريمة لباني', price: 55.00, image: 'https://images.unsplash.com/photo-1628689469838-524a4a973b8e?w=200&h=200&fit=crop' },
      { id: 44, name: 'جبنة موزاريلا', price: 110.00, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200&h=200&fit=crop' },
      { id: 45, name: 'لبن رايب', price: 22.00, image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&h=200&fit=crop' },
    ]
  },
  {
    id: 'bakery',
    name: 'مخبوزات',
    nameEn: 'Bakery',
    icon: Croissant,
    emoji: '🥐',
    color: 'bg-amber-600',
    lightColor: 'bg-amber-950/50',
    borderColor: 'border-amber-600',
    iconColor: 'text-amber-400',
    gradientFrom: 'from-amber-600',
    gradientTo: 'to-amber-800',
    products: [
      { id: 49, name: 'خبز أبيض', price: 10.00, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop' },
      { id: 50, name: 'كرواسون', price: 35.00, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=200&h=200&fit=crop' },
      { id: 51, name: 'خبز سمسم', price: 12.00, image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop' },
      { id: 52, name: 'معجنات', price: 45.00, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&h=200&fit=crop' },
      { id: 53, name: 'خبز فينو', price: 8.00, image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=200&h=200&fit=crop' },
      { id: 54, name: 'فطير مشلتت', price: 55.00, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop' },
      { id: 55, name: 'بيتزا جاهزة', price: 85.00, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop' },
      { id: 56, name: 'خبز توست', price: 15.00, image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=200&h=200&fit=crop' },
      { id: 57, name: 'بسكويت بالشوكولاتة', price: 28.00, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop' },
    ]
  },
  {
    id: 'beverages',
    name: 'مشروبات',
    nameEn: 'Beverages',
    icon: CupSoda,
    emoji: '🥤',
    color: 'bg-cyan-600',
    lightColor: 'bg-cyan-950/50',
    borderColor: 'border-cyan-600',
    iconColor: 'text-cyan-400',
    gradientFrom: 'from-cyan-600',
    gradientTo: 'to-cyan-800',
    products: [
      { id: 61, name: 'عصير برتقال', price: 38.00, image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200&h=200&fit=crop' },
      { id: 62, name: 'مياه معدنية', price: 8.00, image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=200&h=200&fit=crop' },
      { id: 63, name: 'مشروبات غازية', price: 22.00, oldPrice: 28.00, image: 'https://images.unsplash.com/photo-1581636625402-29b2a704ef13?w=200&h=200&fit=crop', discount: true },
      { id: 64, name: 'قهوة', price: 85.00, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=200&h=200&fit=crop' },
      { id: 65, name: 'عصير تفاح', price: 32.00, image: 'https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=200&h=200&fit=crop' },
      { id: 66, name: 'عصير مانجو', price: 35.00, image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=200&h=200&fit=crop' },
      { id: 67, name: 'شاي أخضر', price: 25.00, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&h=200&fit=crop' },
      { id: 68, name: 'نسكافيه', price: 45.00, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=200&h=200&fit=crop' },
      { id: 69, name: 'عصير أناناس', price: 30.00, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=200&h=200&fit=crop' },
      { id: 70, name: 'مياه فوارة', price: 15.00, image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=200&h=200&fit=crop' },
      { id: 71, name: 'شاي كركديه', price: 22.00, image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=200&h=200&fit=crop' },
    ]
  },
  {
    id: 'cleaning',
    name: 'منظفات',
    nameEn: 'Cleaning',
    icon: Sparkles,
    emoji: '✨',
    color: 'bg-purple-600',
    lightColor: 'bg-purple-950/50',
    borderColor: 'border-purple-600',
    iconColor: 'text-purple-400',
    gradientFrom: 'from-purple-600',
    gradientTo: 'to-purple-800',
    products: [
      { id: 73, name: 'سائل تنظيف', price: 55.00, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&h=200&fit=crop' },
      { id: 74, name: 'مسحوق غسيل', price: 120.00, image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=200&h=200&fit=crop' },
      { id: 75, name: 'معطر ملابس', price: 85.00, image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=200&h=200&fit=crop' },
      { id: 76, name: 'منظف أرضيات', price: 48.00, oldPrice: 62.00, image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=200&h=200&fit=crop', discount: true },
      { id: 77, name: 'سائل جلي أطباق', price: 35.00, image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=200&h=200&fit=crop' },
      { id: 78, name: 'مبيض غسيل', price: 45.00, image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=200&h=200&fit=crop' },
      { id: 79, name: 'منظف زجاج', price: 38.00, image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=200&h=200&fit=crop' },
      { id: 80, name: 'معطر جو', price: 55.00, image: 'https://images.unsplash.com/photo-1556227834-09f1de7a7d14?w=200&h=200&fit=crop' },
    ]
  },
  {
    id: 'sweets',
    name: 'حلويات',
    nameEn: 'Sweets',
    icon: Candy,
    emoji: '🍬',
    color: 'bg-pink-600',
    lightColor: 'bg-pink-950/50',
    borderColor: 'border-pink-600',
    iconColor: 'text-pink-400',
    gradientFrom: 'from-pink-600',
    gradientTo: 'to-pink-800',
    products: [
      { id: 85, name: 'شوكولاتة', price: 45.00, image: 'https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=200&h=200&fit=crop' },
      { id: 86, name: 'حلوى شرقية', price: 180.00, image: '/images/products/eastern-sweets.png' },
      { id: 87, name: 'بسكويت', price: 28.00, image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop' },
      { id: 88, name: 'آيس كريم', price: 55.00, oldPrice: 75.00, image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=200&h=200&fit=crop', discount: true },
      { id: 89, name: 'حلاوة طحينية', price: 65.00, image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=200&h=200&fit=crop' },
      { id: 90, name: 'مربى فراولة', price: 42.00, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200&h=200&fit=crop' },
      { id: 91, name: 'عسل نحل', price: 150.00, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&h=200&fit=crop' },
      { id: 92, name: 'شوكولاتة بالبندق', price: 65.00, image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=200&h=200&fit=crop' },
      { id: 93, name: 'جاتوه', price: 120.00, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop' },
      { id: 94, name: 'لوز سكر', price: 85.00, image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=200&h=200&fit=crop' },
    ]
  },
]

const features = [
  { icon: Truck, title: 'توصيل سريع', description: 'توصيل خلال ساعتين' },
  { icon: Star, title: 'جودة عالية', description: 'منتجات طازجة ومضمونة' },
  { icon: Gift, title: 'عروض رمضان', description: 'خصومات خاصة' },
  { icon: Clock, title: 'متاح 24/7', description: 'خدمة على مدار الساعة' },
]

// Team data
const teamLeader = 'مهيمن رمضان سعيد'

const teamMembers = [
  'يوسف احمد السيد',
  'يوسف احمد فاروق',
  'عبدالله احمد عبدالله ابراهيم حمد',
  'محمود فوزي احمد محمود',
  'احمد محمود بركات الشناوي',
  'زياد محمود فوزي الدواس',
  'مصطفى محمد عبد اللطيف',
  'محمد كرم محمد البربري',
  'مهيمن رمضان سعيد طلبه',
]

const supervisors = [
  'د / حازم البكري',
  'د / اسراء محمود',
  'د / محمد سعد',
]

// Product Card Component with 3D effects
function ProductCard({ product, addToCart }: { product: typeof categories[0]['products'][0]; addToCart: () => void }) {
  const isRamadan = product.isRamadan
  
  // Generate a placeholder image based on product name
  const getPlaceholderImage = (name: string) => {
    const colors = ['4CAF50', 'FF9800', '2196F3', 'E91E63', '9C27B0', '00BCD4', 'FF5722', '795548']
    const randomColor = colors[Math.abs(name.charCodeAt(0)) % colors.length]
    return `https://via.placeholder.com/200x200/${randomColor}/FFFFFF?text=${encodeURIComponent(name.substring(0, 2))}`
  }
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget
    target.src = getPlaceholderImage(product.name)
    target.onerror = null // Prevent infinite loop
  }
  
  return (
    <Card 
      className={`group hover:shadow-2xl transition-all duration-500 overflow-hidden transform-gpu perspective-1000 ${
        isRamadan 
          ? 'bg-gradient-to-b from-amber-950 to-gray-900 border-2 border-amber-500 shadow-lg shadow-amber-500/20' 
          : 'bg-gray-800 border border-gray-700 hover:border-gray-600'
      } hover:rotate-y-3 hover:scale-105 hover:-translate-y-2`}
      style={{ 
        transformStyle: 'preserve-3d',
        transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      <CardContent className="p-0">
        {/* Product Image */}
        <div className={`relative p-4 flex items-center justify-center min-h-[160px] overflow-hidden ${
          isRamadan 
            ? 'bg-gradient-to-b from-amber-900/50 to-transparent' 
            : 'bg-gradient-to-b from-gray-700/50 to-transparent'
        }`}>
          <img 
            src={product.image} 
            alt={product.name}
            onError={handleImageError}
            className="w-28 h-28 object-cover rounded-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
            style={{ 
              transformStyle: 'preserve-3d',
              transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          />
          {product.discount && (
            <div className={`absolute top-3 right-3 text-white text-xs font-bold px-3 py-1.5 rounded-full animate-bounce ${
              isRamadan ? 'bg-gradient-to-r from-amber-500 to-yellow-500' : 'bg-gradient-to-r from-red-500 to-pink-500'
            } shadow-lg`}>
              {isRamadan ? '🌟 عرض رمضان' : 'خصم'}
            </div>
          )}
          {isRamadan && (
            <>
              <div className="absolute top-3 left-3 text-2xl animate-pulse">✨</div>
              <div className="absolute bottom-3 right-3 text-xl animate-bounce">🌙</div>
            </>
          )}
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Product Info */}
        <div className="p-4 border-t border-gray-700/50">
          <h4 className={`font-semibold mb-2 line-clamp-1 ${isRamadan ? 'text-amber-300' : 'text-gray-200'}`}>{product.name}</h4>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`text-lg font-bold ${isRamadan ? 'text-amber-400' : 'text-green-400'}`}>{product.price} ج.م</span>
              {product.oldPrice && (
                <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>
              )}
            </div>
          </div>
          <Button 
            size="sm" 
            className={`w-full mt-3 transform group-hover:scale-105 transition-transform duration-300 ${
              isRamadan ? 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 font-bold' : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
            onClick={addToCart}
          >
            <ShoppingCart className="w-4 h-4 ml-2" />
            أضف للسلة
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Floating Lantern Component
function FloatingLantern({ delay = 0, left = '10%' }: { delay?: number; left?: string }) {
  return (
    <div 
      className="absolute text-4xl animate-float opacity-30 pointer-events-none"
      style={{ 
        left, 
        top: '20%',
        animationDelay: `${delay}s`,
        animationDuration: '4s'
      }}
    >
      🏮
    </div>
  )
}

// Floating Star Component
function FloatingStar({ delay = 0, right = '10%' }: { delay?: number; right?: string }) {
  return (
    <div 
      className="absolute text-2xl animate-twinkle opacity-40 pointer-events-none"
      style={{ 
        right, 
        top: '30%',
        animationDelay: `${delay}s`
      }}
    >
      ⭐
    </div>
  )
}

export default function Home() {
  const [cartCount, setCartCount] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const productsSectionRef = useRef<HTMLDivElement>(null)

  const addToCart = () => {
    setCartCount(prev => prev + 1)
  }

  // Handle category selection with scroll
  const handleCategorySelect = (categoryId: string) => {
    const newCategoryId = activeCategory === categoryId ? null : categoryId
    setActiveCategory(newCategoryId)
    
    if (newCategoryId) {
      setTimeout(() => {
        productsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }

  // Get all products for search
  const getAllProducts = () => {
    const allProducts: (typeof categories[0]['products'][0] & { categoryName: string })[] = []
    categories.forEach(category => {
      category.products.forEach(product => {
        allProducts.push({ ...product, categoryName: category.name })
      })
    })
    return allProducts
  }

  // Search functionality
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === '') {
      setShowSearchResults(false)
      return
    }
    setShowSearchResults(true)
  }

  const clearSearch = () => {
    setSearchQuery('')
    setShowSearchResults(false)
  }

  const filteredProducts = searchQuery.trim() === '' 
    ? [] 
    : getAllProducts().filter(product => 
        product.name.includes(searchQuery) || 
        product.categoryName.includes(searchQuery)
      )

  const activeCategoryData = categories.find(c => c.id === activeCategory)

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 overflow-x-hidden">
      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(3deg); }
          75% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        
        @keyframes icon-enter {
          0% { opacity: 0; transform: scale(0.3) rotate(-180deg); }
          60% { transform: scale(1.15) rotate(10deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        
        @keyframes emoji-pop {
          0% { opacity: 0; transform: scale(0) rotate(-45deg); }
          60% { transform: scale(1.4) rotate(15deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.3); }
          50% { box-shadow: 0 0 40px rgba(245, 158, 11, 0.6); }
        }
        
        @keyframes crescent-swing {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        
        @keyframes rotate-3d {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        
        @keyframes float-3d {
          0%, 100% { transform: translateY(0) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(5deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        
        .animate-wiggle { animation: wiggle 1.5s ease-in-out infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        .animate-icon-enter { animation: icon-enter 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-emoji-pop { animation: emoji-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .animate-slide-down { animation: slide-down 0.3s ease-out forwards; }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-crescent-swing { animation: crescent-swing 3s ease-in-out infinite; }
        .animate-rotate-3d { animation: rotate-3d 20s linear infinite; }
        .animate-float-3d { animation: float-3d 6s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
      `}</style>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 animate-glow-pulse transform hover:rotate-12 transition-transform duration-300">
                <span className="text-white text-2xl">☀️</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-amber-400">الشروق</h1>
                <p className="text-xs text-amber-500/70">سوبر ماركت</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
              <div className="relative w-full">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/50" />
                <Input
                  type="text"
                  placeholder="ابحث عن منتجات..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pr-10 pl-10 py-2 bg-gray-800 border-amber-500/20 focus:bg-gray-700 focus:ring-2 focus:ring-amber-500 text-gray-100 placeholder:text-gray-500 rounded-full transition-all duration-300"
                />
                {searchQuery && (
                  <button onClick={clearSearch} className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 hover:text-gray-300">
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
              
              {/* Search Results Dropdown */}
              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 rounded-2xl shadow-xl border border-amber-500/20 max-h-96 overflow-y-auto z-50 animate-slide-down">
                  {filteredProducts.length > 0 ? (
                    <div className="p-2">
                      <div className="px-3 py-2 text-sm text-gray-400 border-b border-gray-700">
                        تم العثور على {filteredProducts.length} منتج
                      </div>
                      {filteredProducts.map((product) => (
                        <div key={product.id} className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-xl cursor-pointer transition-colors">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-12 h-12 rounded-lg object-cover" 
                            onError={(e) => {
                              const colors = ['4CAF50', 'FF9800', '2196F3', 'E91E63', '9C27B0']
                              const color = colors[Math.abs(product.name.charCodeAt(0)) % colors.length]
                              e.currentTarget.src = `https://via.placeholder.com/100x100/${color}/FFFFFF?text=${encodeURIComponent(product.name.substring(0, 2))}`
                            }}
                          />
                          <div className="flex-1">
                            <p className="font-medium text-gray-200">{product.name}</p>
                            <p className="text-sm text-gray-500">{product.categoryName}</p>
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-amber-400">{product.price} ج.م</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      <Search className="w-12 h-12 mx-auto mb-3 text-gray-600" />
                      <p>لم يتم العثور على نتائج</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="#ramadan-offers" className="text-amber-400 hover:text-amber-300 transition-colors font-medium flex items-center gap-1 hover:scale-105 transform duration-200">
                <Moon className="w-4 h-4" />
                عروض رمضان
              </a>
              <a href="#team" className="text-gray-300 hover:text-amber-400 transition-colors font-medium hover:scale-105 transform duration-200">فريق العمل</a>
              <a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors font-medium hover:scale-105 transform duration-200">تواصل معنا</a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button className="md:hidden p-2 hover:bg-gray-800 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-400" />
              </button>
              <button className="relative p-2 hover:bg-gray-800 rounded-full transition-all hover:scale-110 duration-200">
                <Heart className="w-5 h-5 text-gray-400" />
              </button>
              <button className="relative p-2 hover:bg-gray-800 rounded-full transition-all hover:scale-110 duration-200">
                <User className="w-5 h-5 text-gray-400" />
              </button>
              <button className="relative p-2 bg-amber-500 hover:bg-amber-600 rounded-full transition-all hover:scale-110 duration-200 shadow-lg shadow-amber-500/30">
                <ShoppingCart className="w-5 h-5 text-gray-900" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -left-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold animate-bounce">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="lg:hidden p-2 hover:bg-gray-800 rounded-full transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <Menu className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800 animate-slide-down">
              <div className="relative mb-4">
                <Input
                  type="text"
                  placeholder="ابحث عن منتجات..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full pr-4 pl-10 py-2 bg-gray-800 border-gray-700 focus:ring-2 focus:ring-amber-500 text-gray-100 rounded-full"
                />
              </div>
              <div className="flex flex-col gap-3">
                <a href="#ramadan-offers" className="text-amber-400 transition-colors font-medium py-2">🌙 عروض رمضان</a>
                <a href="#team" className="text-gray-300 hover:text-amber-400 transition-colors font-medium py-2">فريق العمل</a>
                <a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors font-medium py-2">تواصل معنا</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content with Sidebar */}
      <div className="flex">
        {/* Categories Sidebar */}
        <aside className="hidden md:block w-64 bg-gray-900/80 backdrop-blur-sm border-l border-amber-500/20 min-h-screen sticky top-16 self-start">
          <div className="p-4">
            <h3 className="text-lg font-bold text-amber-400 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <Moon className="w-4 h-4 text-amber-400" />
              </span>
              الأقسام
            </h3>
            <div className="space-y-2">
              {categories.map((category, index) => {
                const Icon = category.icon
                const isActive = activeCategory === category.id
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      isActive 
                        ? `bg-gradient-to-l ${category.gradientFrom} ${category.gradientTo} text-white shadow-lg` 
                        : `bg-gray-800 hover:bg-gray-700 border border-gray-700`
                    } ${category.isSpecial && !isActive ? 'border-amber-500/50 animate-pulse-glow' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 ${
                      isActive ? 'bg-white/20' : category.color
                    }`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 text-right">
                      <p className={`font-medium ${isActive ? 'text-white' : category.iconColor}`}>
                        {category.name}
                        {category.isSpecial && <span className="mr-1">✨</span>}
                      </p>
                      <p className={`text-xs ${isActive ? 'text-white/70' : 'text-gray-500'}`}>{category.products.length} منتج</p>
                    </div>
                    {isActive ? <ChevronUp className="w-5 h-5 text-white" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                  </button>
                )
              })}
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Hero Section - Ramadan Theme */}
          <section className="relative overflow-hidden bg-gradient-to-l from-gray-900 via-amber-950 to-gray-900">
            {/* Ramadan Decorations */}
            <FloatingLantern delay={0} left="5%" />
            <FloatingLantern delay={1} left="85%" />
            <FloatingStar delay={0.5} right="15%" />
            <FloatingStar delay={1.5} right="75%" />
            <FloatingStar delay={2} right="45%" />
            
            {/* Crescent Moon Decoration */}
            <div className="absolute top-10 left-10 text-6xl animate-crescent-swing opacity-20">
              🌙
            </div>
            
            {/* 3D Floating Elements */}
            <div className="absolute top-20 right-20 w-20 h-20 bg-amber-500/10 rounded-full animate-float-3d blur-sm"></div>
            <div className="absolute bottom-20 left-40 w-32 h-32 bg-amber-500/5 rounded-full animate-float-3d blur-md" style={{ animationDelay: '2s' }}></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-right flex-1">
                  {/* Ramadan Banner */}
                  <div className="inline-flex items-center gap-3 bg-gradient-to-l from-amber-500/20 to-amber-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-4 border border-amber-500/30 transform hover:scale-105 transition-transform duration-300">
                    <span className="text-3xl animate-pulse">🌙</span>
                    <span className="text-amber-300 font-bold text-xl">رمضان كريم</span>
                    <span className="text-3xl">🏮</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 transform hover:scale-105 transition-transform duration-500">
                    سوبر ماركت <span className="text-amber-400">الشروق</span>
                  </h1>
                  <p className="text-xl text-amber-200/80 mb-6">
                    جودة طازجة وأسعار مناسبة
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button size="lg" className="bg-amber-500 text-gray-900 hover:bg-amber-400 shadow-lg shadow-amber-500/30 px-8 font-bold transform hover:scale-105 transition-all duration-300">
                      تسوق الآن
                    </Button>
                    <Button size="lg" variant="outline" className="border-amber-500/30 text-amber-300 hover:bg-amber-500/10 px-8 transform hover:scale-105 transition-all duration-300">
                      <Phone className="w-5 h-5 ml-2" />
                      اتصل بنا
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="relative text-8xl md:text-9xl animate-float">
                      🛒
                    </div>
                  </div>
                  {/* Ramadan Kareem Image */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-amber-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <img 
                      src="https://i.pinimg.com/736x/4f/f8/5f/4ff85f085e7d696462971018e95c7029.jpg" 
                      alt="رمضان كريم"
                      className="relative w-36 h-36 md:w-44 md:h-44 object-cover rounded-2xl shadow-xl shadow-amber-500/30 animate-float border-2 border-amber-500/50 transform group-hover:scale-105 transition-all duration-500"
                      style={{ animationDelay: '0.5s' }}
                    />
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-amber-500/50">
                      <span className="text-2xl">🌙</span>
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-lg">⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-950 to-transparent"></div>
          </section>

          {/* Features */}
          <section className="py-8 -mt-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-gray-800/80 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 perspective-1000" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <h3 className="font-bold text-gray-200 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-500">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Ramadan Special Offers Banner */}
          <section id="ramadan-offers" className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-l from-amber-600 via-amber-500 to-yellow-500 rounded-2xl p-6 md:p-8 relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-4 right-20 text-4xl animate-bounce opacity-50">🏮</div>
                <div className="absolute bottom-4 left-20 text-3xl animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}>🌙</div>
                
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-center md:text-right">
                    <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                      <Sparkle className="w-5 h-5 text-yellow-200 animate-pulse" />
                      <span className="text-yellow-100 font-medium">عروض رمضان الخاصة</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      خصم يصل إلى 40% على منتجات رمضان
                    </h2>
                    <p className="text-yellow-100">تمر، مشمش، كنافة، مكسرات والمزيد!</p>
                  </div>
                  <Button 
                    size="lg" 
                    className="bg-gray-900 text-amber-400 hover:bg-gray-800 shadow-lg hover:scale-105 transition-all duration-300 font-bold"
                    onClick={() => handleCategorySelect('ramadan')}
                  >
                    تسوق الآن 🌙
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Section - Collapsible */}
          <section ref={productsSectionRef} className="py-8 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Mobile Categories List */}
              <div className="md:hidden mb-8">
                <h2 className="text-2xl font-bold text-amber-400 mb-4 text-center">الأقسام</h2>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category, index) => {
                    const Icon = category.icon
                    const isActive = activeCategory === category.id
                    return (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category.id)}
                        className={`flex items-center gap-2 p-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                          isActive 
                            ? `bg-gradient-to-l ${category.gradientFrom} ${category.gradientTo} text-white shadow-lg` 
                            : 'bg-gray-800 border border-gray-700'
                        } ${category.isSpecial ? 'border-amber-500/50' : ''}`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? 'text-white' : category.iconColor}`} />
                        <span className={`font-medium text-sm ${isActive ? 'text-white' : category.iconColor}`}>
                          {category.name}
                          {category.isSpecial && <span className="mr-1">✨</span>}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Active Category Display */}
              {activeCategoryData ? (
                <div className="animate-slide-down">
                  {/* Category Header */}
                  <div className={`relative overflow-hidden rounded-3xl mb-6 bg-gradient-to-l ${activeCategoryData.gradientFrom} ${activeCategoryData.gradientTo} transform hover:scale-[1.01] transition-transform duration-500`}>
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Special Ramadan Badge */}
                    {activeCategoryData.isSpecial && (
                      <div className="absolute top-4 left-4 bg-amber-500 text-gray-900 px-4 py-1 rounded-full font-bold text-sm animate-bounce">
                        🌟 عروض رمضان الخاصة
                      </div>
                    )}
                    
                    <div className="relative flex items-center gap-4 p-6">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl scale-150 animate-pulse"></div>
                          <div className="relative w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/30 shadow-xl animate-icon-enter transform hover:rotate-12 transition-transform duration-500">
                            <activeCategoryData.icon className="w-10 h-10 text-white animate-wiggle" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 text-white">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-4xl animate-emoji-pop">{activeCategoryData.emoji}</span>
                          <h3 className="text-2xl md:text-3xl font-bold">{activeCategoryData.name}</h3>
                        </div>
                        <p className="text-white/80 text-lg">{activeCategoryData.nameEn}</p>
                      </div>
                      <div className="hidden md:flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2">
                        <Badge className="bg-white text-gray-800 text-sm">{activeCategoryData.products.length} منتج</Badge>
                      </div>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className={`grid gap-4 ${activeCategoryData.isSpecial ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                    {activeCategoryData.products.map((product, index) => (
                      <div 
                        key={product.id}
                        className="animate-slide-down"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <ProductCard product={product} addToCart={addToCart} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* Empty State */
                <div className="text-center py-16">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="relative w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/30 animate-float">
                      <Moon className="w-12 h-12 text-amber-500" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-300 mb-2">اختر قسم للتصفح</h3>
                  <p className="text-gray-500">اختر أحد الأقسام من القائمة الجانبية لعرض المنتجات</p>
                  <div className="flex justify-center gap-2 mt-4">
                    <span className="text-2xl animate-bounce">🌙</span>
                    <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>⭐</span>
                    <span className="text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>🏮</span>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="py-12 bg-gradient-to-l from-gray-900 via-amber-950/50 to-gray-900 border-y border-amber-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="text-3xl animate-pulse">🌙</span>
                  <h2 className="text-3xl font-bold text-amber-400">اشترك في نشرتنا البريدية</h2>
                </div>
                <p className="text-gray-400 mb-6 max-w-lg mx-auto">
                  احصل على آخر العروض والخصومات الرمضانية مباشرة في بريدك الإلكتروني
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input 
                    type="email" 
                    placeholder="أدخل بريدك الإلكتروني"
                    className="flex-1 px-4 py-3 bg-gray-800 border-gray-700 rounded-lg text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-amber-500 transition-all duration-300"
                  />
                  <Button className="bg-amber-500 text-gray-900 hover:bg-amber-400 px-6 font-bold transform hover:scale-105 transition-all duration-300">
                    اشترك
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Team Credits Section */}
          <section id="team" className="py-16 bg-gray-900">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg shadow-amber-500/30 mb-4 animate-glow-pulse transform hover:rotate-12 transition-transform duration-500">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                  فريق العمل
                </h2>
                <p className="text-gray-500">تم تطوير هذا المشروع بواسطة</p>
              </div>

              {/* Team Leader */}
              <div className="mb-10">
                <div className="bg-gradient-to-l from-amber-900/50 to-amber-950/50 rounded-2xl border-2 border-amber-500/30 p-6 relative overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 transform hover:rotate-12 transition-transform duration-300">
                      <Crown className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-amber-500 font-medium mb-1">قائد الفريق</p>
                      <h3 className="text-xl font-bold text-gray-200">{teamLeader}</h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Members */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-300">أعضاء الفريق</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="bg-gray-800 rounded-xl border border-gray-700 p-4 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 group transform hover:scale-105 hover:-translate-y-1" style={{ animationDelay: `${index * 0.05}s` }}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-gray-900 font-bold shadow-sm group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                        <p className="font-medium text-gray-300 group-hover:text-amber-400 transition-colors">{member}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supervisors */}
              <div>
                <div className="bg-gradient-to-l from-blue-900/30 to-indigo-900/30 rounded-2xl border-2 border-blue-500/30 p-6 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse"></div>
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold text-blue-400">تحت إشراف</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {supervisors.map((supervisor, index) => (
                        <div key={index} className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-500/20 hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 transform hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm transform hover:rotate-12 transition-transform duration-300">
                            <GraduationCap className="w-6 h-6 text-white" />
                          </div>
                          <p className="font-semibold text-gray-300">{supervisor}</p>
                        </div>
                      ))}
                    </div>
                    {/* Logo after supervisors */}
                    <div className="mt-6 flex justify-center">
                      <div className="bg-gray-800 rounded-xl p-4 shadow-lg border border-amber-500/30 transform hover:scale-105 transition-all duration-300">
                        <img 
                          src="/upload/FB_IMG_1771240652719.jpg" 
                          alt="HIM Logo"
                          className="w-24 h-24 object-cover rounded-xl shadow-lg mx-auto transform hover:rotate-3 transition-transform duration-300"
                        />
                        <p className="text-center mt-3 font-bold text-amber-400">HIM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-gray-950 border-t border-amber-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 transform hover:rotate-12 transition-transform duration-300">
                  <span className="text-2xl">☀️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-400">الشروق</h3>
                  <p className="text-gray-500 text-sm">سوبر ماركت</p>
                </div>
              </div>
              <p className="text-gray-500 mb-4 max-w-md">
                سوبر ماركت الشروق - وجهتك المثالية للتسوق. نقدم لكم أجود المنتجات الطازجة بأسعار منافسة وخدمة توصيل سريعة.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all hover:scale-110 duration-300">
                  <span>📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all hover:scale-110 duration-300">
                  <span>📷</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-all hover:scale-110 duration-300">
                  <span>🐦</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-500">
                <li><a href="#" className="hover:text-amber-400 transition-colors hover:translate-x-1 inline-block">الرئيسية</a></li>
                <li><a href="#ramadan-offers" className="hover:text-amber-400 transition-colors hover:translate-x-1 inline-block">عروض رمضان</a></li>
                <li><a href="#team" className="hover:text-amber-400 transition-colors hover:translate-x-1 inline-block">فريق العمل</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors hover:translate-x-1 inline-block">تواصل معنا</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-amber-400">تواصل معنا</h4>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>المحلة الكبرى</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span dir="ltr">01553848462</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>متاح 24 ساعة</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-600">
            <p className="flex items-center justify-center gap-2">
              <span>🌙</span>
              © 2026 سوبر ماركت الشروق. جميع الحقوق محفوظة.
              <span>⭐</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
