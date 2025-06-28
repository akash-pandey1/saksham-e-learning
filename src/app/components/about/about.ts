import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  teamMembers = [
    {
      name: 'Akash Pandey',
      role: 'Founder & Lead Instructor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      bio: 'Akash is a passionate full-stack developer and educator with over 8 years of experience. He has helped thousands of students master web development and transition into successful tech careers.',
      skills: ['Full-Stack Development', 'React', 'Node.js', 'Python', 'AWS'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Instructor',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      bio: 'Priya specializes in frontend development and UI/UX design. She has worked with major tech companies and loves teaching students the art of creating beautiful, functional websites.',
      skills: ['Frontend Development', 'UI/UX Design', 'JavaScript', 'CSS', 'React'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    },
    {
      name: 'Rahul Kumar',
      role: 'Data Science Instructor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      bio: 'Rahul is a data scientist and machine learning expert. He has a PhD in Computer Science and has published numerous research papers in top-tier conferences.',
      skills: ['Machine Learning', 'Python', 'Data Science', 'Deep Learning', 'Statistics'],
      social: {
        linkedin: '#',
        github: '#',
        twitter: '#'
      }
    }
  ];

  stats = [
    { number: '50,000+', label: 'Students Enrolled' },
    { number: '200+', label: 'Courses Created' },
    { number: '95%', label: 'Success Rate' },
    { number: '150+', label: 'Countries Reached' }
  ];

  values = [
    {
      icon: '🎯',
      title: 'Quality Education',
      description: 'We believe in providing the highest quality education with practical, real-world projects and industry-relevant curriculum.'
    },
    {
      icon: '🤝',
      title: 'Community Support',
      description: 'Our community of learners and instructors support each other, creating a collaborative learning environment.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We constantly innovate our teaching methods and content to stay ahead of industry trends and technology changes.'
    },
    {
      icon: '🌍',
      title: 'Accessibility',
      description: 'Education should be accessible to everyone, regardless of their background or location.'
    }
  ];

  timeline = [
    {
      year: '2020',
      title: 'EduLearn Founded',
      description: 'Akash Pandey founded EduLearn with a vision to make quality education accessible to everyone.'
    },
    {
      year: '2021',
      title: 'First 10,000 Students',
      description: 'Reached our first milestone of 10,000 enrolled students across various courses.'
    },
    {
      year: '2022',
      title: 'Mobile App Launch',
      description: 'Launched our mobile application to provide learning on-the-go experience.'
    },
    {
      year: '2023',
      title: 'AI-Powered Learning',
      description: 'Introduced AI-powered personalized learning paths and adaptive assessments.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded to serve students in over 150 countries with localized content and support.'
    }
  ];
}
