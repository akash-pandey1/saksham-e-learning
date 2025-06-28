import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  contactInfo = {
    email: 'hello@edulearn.com',
    phone: '+91 98765 43210',
    address: '123 Tech Park, Bangalore, Karnataka, India - 560001',
    workingHours: 'Monday - Friday: 9:00 AM - 6:00 PM IST'
  };

  socialLinks = [
    {
      name: 'LinkedIn',
      url: '#',
      icon: 'linkedin'
    },
    {
      name: 'Twitter',
      url: '#',
      icon: 'twitter'
    },
    {
      name: 'Facebook',
      url: '#',
      icon: 'facebook'
    },
    {
      name: 'Instagram',
      url: '#',
      icon: 'instagram'
    }
  ];

  faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'You can enroll in any course by clicking the "Enroll Now" button on the course page. You\'ll be redirected to our secure payment gateway where you can complete your purchase.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with your course, you can request a full refund within 30 days of purchase.'
    },
    {
      question: 'Can I access courses on mobile devices?',
      answer: 'Absolutely! All our courses are mobile-friendly and can be accessed on smartphones, tablets, and computers. We also have a dedicated mobile app for iOS and Android.'
    },
    {
      question: 'How long do I have access to the courses?',
      answer: 'You have lifetime access to all courses you purchase. You can watch the videos, download resources, and access updates at any time.'
    },
    {
      question: 'Do you provide certificates?',
      answer: 'Yes, you\'ll receive a certificate of completion for each course you finish. Our certificates are recognized by employers worldwide.'
    },
    {
      question: 'How can I get help if I\'m stuck?',
      answer: 'We provide multiple support channels including Q&A forums, direct instructor support, and our customer service team. You can also reach out to us through the contact form.'
    }
  ];

  departments = [
    {
      name: 'General Support',
      email: 'support@edulearn.com',
      description: 'For general questions about courses, enrollment, and platform usage.'
    },
    {
      name: 'Technical Support',
      email: 'tech@edulearn.com',
      description: 'For technical issues, platform problems, and account-related queries.'
    },
    {
      name: 'Business Inquiries',
      email: 'business@edulearn.com',
      description: 'For partnership opportunities, corporate training, and business collaborations.'
    },
    {
      name: 'Content Feedback',
      email: 'feedback@edulearn.com',
      description: 'For suggestions, course improvements, and content-related feedback.'
    }
  ];

  submitForm() {
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  }
}
