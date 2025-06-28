import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './course-page.html',
  styleUrl: './course-page.scss'
})
export class CoursePageComponent {
  courses = [
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
      duration: '25 hours',
      instructor: {
        name: 'Akash Pandey',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
        title: 'Digital Skills Instructor'
      },
      isHot: true
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
      duration: '38 hours',
      instructor: {
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
        title: 'Office Skills Expert'
      },
      isNew: true
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
      duration: '35 hours',
      instructor: {
        name: 'Rahul Kumar',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
        title: 'Security Specialist'
      }
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
      duration: '28 hours',
      instructor: {
        name: 'Anjali Patel',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
        title: 'Communication Expert'
      }
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
      duration: '45 hours',
      instructor: {
        name: 'Akash Pandey',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
        title: 'Data Analyst'
      },
      isHot: true
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
      duration: '25 hours',
      instructor: {
        name: 'Rahul Kumar',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
        title: 'Remote Work Specialist'
      }
    },
    {
      id: 7,
      title: 'Internet Safety & Privacy',
      description: 'Learn to protect your personal information, avoid scams, and maintain privacy in the digital age.',
      category: 'Cybersecurity',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
      rating: 4.9,
      reviews: 2134,
      price: 2299,
      originalPrice: 4599,
      currency: '₹',
      lessons: 165,
      duration: '32 hours',
      instructor: {
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
        title: 'Privacy Expert'
      }
    },
    {
      id: 8,
      title: 'Digital Banking & Online Finance',
      description: 'Master online banking, digital payments, budgeting apps, and financial security in the digital world.',
      category: 'Financial Skills',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop',
      rating: 4.7,
      reviews: 1456,
      price: 2799,
      originalPrice: 5599,
      currency: '₹',
      lessons: 134,
      duration: '30 hours',
      instructor: {
        name: 'Anjali Patel',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
        title: 'Financial Literacy Expert'
      }
    },
    {
      id: 9,
      title: 'Smartphone & Mobile Apps',
      description: 'Learn to use smartphones effectively, navigate mobile apps, and leverage mobile technology for productivity.',
      category: 'Mobile Skills',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      rating: 4.6,
      reviews: 1876,
      price: 1999,
      originalPrice: 3999,
      currency: '₹',
      lessons: 98,
      duration: '22 hours',
      instructor: {
        name: 'Rahul Kumar',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
        title: 'Mobile Technology Expert'
      }
    },
    {
      id: 10,
      title: 'Digital Creativity & Media',
      description: 'Learn photo editing, video creation, graphic design basics, and digital storytelling for personal and professional use.',
      category: 'Creative Skills',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
      rating: 4.5,
      reviews: 1234,
      price: 2499,
      originalPrice: 4999,
      currency: '₹',
      lessons: 145,
      duration: '35 hours',
      instructor: {
        name: 'Akash Pandey',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
        title: 'Digital Media Instructor'
      }
    },
    {
      id: 11,
      title: 'Online Learning & Research',
      description: 'Master online research skills, fact-checking, academic databases, and lifelong learning strategies.',
      category: 'Learning Skills',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      rating: 4.8,
      reviews: 1654,
      price: 1799,
      originalPrice: 3599,
      currency: '₹',
      lessons: 112,
      duration: '28 hours',
      instructor: {
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
        title: 'Research Specialist'
      }
    },
    {
      id: 12,
      title: 'Digital Citizenship & Ethics',
      description: 'Learn responsible digital behavior, online ethics, digital rights, and contributing positively to the digital community.',
      category: 'Digital Ethics',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=250&fit=crop',
      rating: 4.7,
      reviews: 1432,
      price: 1599,
      originalPrice: 3199,
      currency: '₹',
      lessons: 89,
      duration: '20 hours',
      instructor: {
        name: 'Anjali Patel',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
        title: 'Digital Ethics Educator'
      }
    }
  ];

  categories = ['All', 'Digital Skills', 'Office Skills', 'Cybersecurity', 'Communication', 'Data Skills', 'Workplace Skills', 'Financial Skills', 'Mobile Skills', 'Creative Skills', 'Learning Skills', 'Digital Ethics'];
  selectedCategory = 'All';
  searchQuery = '';
  sortBy = 'popular';

  get filteredCourses() {
    let filtered = this.courses;

    // Filter by category
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.category === this.selectedCategory);
    }

    // Filter by search query
    if (this.searchQuery) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        course.instructor.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Sort courses
    switch (this.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      default: // popular
        filtered.sort((a, b) => b.reviews - a.reviews);
    }

    return filtered;
  }

  get courseStats() {
    const totalCourses = this.courses.length;
    const totalStudents = this.courses.reduce((sum, course) => sum + course.reviews * 10, 0);
    const avgRating = this.courses.reduce((sum, course) => sum + course.rating, 0) / totalCourses;
    const totalInstructors = new Set(this.courses.map(course => course.instructor.name)).size;

    return [
      { number: totalCourses, label: 'Total Courses' },
      { number: totalStudents.toLocaleString(), label: 'Students Enrolled' },
      { number: avgRating.toFixed(1), label: 'Average Rating' },
      { number: totalInstructors, label: 'Expert Instructors' }
    ];
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  updateSearch(event: any) {
    this.searchQuery = event.target.value;
  }

  updateSort(event: any) {
    this.sortBy = event.target.value;
  }
}
