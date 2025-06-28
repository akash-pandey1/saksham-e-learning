import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss'
})
export class LandingPageComponent {
  popularCourses = [
    {
      id: 1,
      title: 'Digital Literacy Fundamentals',
      description: 'Master essential computer skills, internet navigation, email communication, and basic software applications for the digital workplace.',
      category: 'Digital Skills',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      rating: 4.9,
      reviews: 3247,
      price: 2999,
      originalPrice: 5999,
      currency: '₹',
      lessons: 95,
      duration: '25 hours'
    },
    {
      id: 2,
      title: 'Microsoft Office Mastery',
      description: 'Learn Word, Excel, PowerPoint, and Outlook to boost your productivity and professional communication skills.',
      category: 'Office Skills',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop',
      rating: 4.8,
      reviews: 2893,
      price: 3999,
      originalPrice: 7999,
      currency: '₹',
      lessons: 156,
      duration: '38 hours'
    },
    {
      id: 3,
      title: 'Cybersecurity Awareness',
      description: 'Learn to protect yourself online, recognize threats, and practice safe digital habits in the connected world.',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
      rating: 4.7,
      reviews: 2234,
      price: 2499,
      originalPrice: 4999,
      currency: '₹',
      lessons: 142,
      duration: '35 hours'
    },
    {
      id: 4,
      title: 'Social Media & Digital Communication',
      description: 'Master professional social media use, digital etiquette, and effective online communication strategies.',
      category: 'Communication',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop',
      rating: 4.6,
      reviews: 1987,
      price: 1999,
      originalPrice: 3999,
      currency: '₹',
      lessons: 128,
      duration: '28 hours'
    },
    {
      id: 5,
      title: 'Data Analysis for Everyone',
      description: 'Learn to work with data, create charts, make informed decisions, and understand basic statistics.',
      category: 'Data Skills',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      rating: 4.8,
      reviews: 2654,
      price: 3499,
      originalPrice: 6999,
      currency: '₹',
      lessons: 198,
      duration: '45 hours'
    },
    {
      id: 6,
      title: 'Remote Work & Digital Collaboration',
      description: 'Master virtual meetings, project management tools, and effective remote work practices.',
      category: 'Workplace Skills',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      rating: 4.5,
      reviews: 1876,
      price: 1799,
      originalPrice: 3599,
      currency: '₹',
      lessons: 115,
      duration: '25 hours'
    }
  ];

  testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      title: 'Administrative Assistant',
      text: 'Saksham helped me gain the digital skills I needed to advance in my career. The Microsoft Office course was exactly what I needed!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      title: 'Small Business Owner',
      text: 'The digital literacy course gave me the confidence to manage my business online. I can now handle all my digital needs independently.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Anjali Patel',
      title: 'Teacher',
      text: 'The remote work course helped me transition to online teaching seamlessly. The practical skills I learned are invaluable.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      title: 'Retiree',
      text: 'At 65, I was worried about being left behind in the digital world. Saksham made learning technology easy and enjoyable.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face'
    }
  ];
}
