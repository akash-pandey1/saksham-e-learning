import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.scss'
})
export class CourseDetail implements OnInit {
  course: any = null;
  selectedTab = 'overview';
  safeVideoUrl: SafeResourceUrl | null = null;
  
  courseData = {
    id: 1,
    title: 'Digital Literacy Fundamentals',
    subtitle: 'Master essential computer skills, internet navigation, and digital workplace tools',
    description: 'Build confidence in the digital world with this comprehensive course. Learn essential computer skills, internet navigation, email communication, and basic software applications needed for today\'s workplace.',
    instructor: {
      name: 'Akash Pandey',
      title: 'Digital Skills Instructor & Technology Educator',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      bio: 'Akash Pandey is a passionate technology educator with over 8 years of experience in digital literacy training. He has helped thousands of learners gain confidence in using technology and has worked with organizations to bridge the digital divide.',
      rating: 4.9,
      students: 15420,
      courses: 12
    },
    price: 2999,
    originalPrice: 5999,
    currency: '₹',
    rating: 4.9,
    reviews: 3247,
    students: 15420,
    language: 'English',
    lastUpdated: 'December 2024',
    duration: '25 hours',
    lessons: 95,
    level: 'Beginner',
    category: 'Digital Skills',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop',
    videoPreview: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    features: [
      'Lifetime access to course content',
      'Certificate of completion',
      'Downloadable resources',
      'Mobile and TV access',
      '30-day money-back guarantee',
      'Instructor Q&A support'
    ],
    whatYouWillLearn: [
      'Navigate computers and operating systems confidently',
      'Use the internet safely and efficiently',
      'Master email communication and etiquette',
      'Work with basic software applications',
      'Protect your personal information online',
      'Use productivity tools for work and personal tasks',
      'Understand digital security best practices',
      'Build confidence in using technology'
    ],
    requirements: [
      'No prior computer experience required',
      'Access to a computer with internet connection',
      'Willingness to learn and practice',
      'Basic reading and writing skills'
    ],
    targetAudience: [
      'Complete beginners who want to learn computer skills',
      'Individuals returning to the workforce',
      'Seniors who want to stay connected digitally',
      'Anyone who wants to build digital confidence'
    ],
    curriculum: [
      {
        title: 'Introduction to Digital Literacy',
        lessons: 5,
        duration: '2 hours',
        topics: ['What is digital literacy?', 'Why digital skills matter', 'Overcoming technology anxiety', 'Setting up your learning environment']
      },
      {
        title: 'Computer Basics',
        lessons: 12,
        duration: '4 hours',
        topics: ['Understanding computer hardware', 'Operating system basics', 'File and folder management', 'Basic troubleshooting']
      },
      {
        title: 'Internet Navigation',
        lessons: 15,
        duration: '6 hours',
        topics: ['How the internet works', 'Using web browsers', 'Searching effectively', 'Evaluating online information', 'Bookmarking and favorites']
      },
      {
        title: 'Email Communication',
        lessons: 20,
        duration: '8 hours',
        topics: ['Creating and managing email accounts', 'Writing professional emails', 'Email etiquette and safety', 'Managing contacts and calendar']
      },
      {
        title: 'Basic Software Applications',
        lessons: 18,
        duration: '7 hours',
        topics: ['Word processing basics', 'Creating and editing documents', 'Spreadsheet fundamentals', 'Presentation software basics']
      },
      {
        title: 'Online Safety and Security',
        lessons: 25,
        duration: '10 hours',
        topics: ['Password security', 'Recognizing online scams', 'Protecting personal information', 'Safe online shopping', 'Social media safety']
      },
      {
        title: 'Digital Productivity Tools',
        lessons: 22,
        duration: '9 hours',
        topics: ['Cloud storage and backup', 'Online collaboration tools', 'Digital calendars and scheduling', 'Note-taking apps']
      },
      {
        title: 'Mobile Device Basics',
        lessons: 15,
        duration: '6 hours',
        topics: ['Smartphone navigation', 'Mobile apps and downloads', 'Mobile internet usage', 'Mobile security']
      },
      {
        title: 'Digital Communication',
        lessons: 10,
        duration: '4 hours',
        topics: ['Video calling basics', 'Instant messaging', 'Online forums and communities', 'Digital etiquette']
      },
      {
        title: 'Real-World Applications',
        lessons: 43,
        duration: '15 hours',
        topics: ['Online banking and payments', 'Government services online', 'Healthcare portals', 'Educational resources', 'Job searching online']
      }
    ],
    reviewList: [
      {
        id: 1,
        name: 'Priya Sharma',
        rating: 5,
        date: '2 weeks ago',
        text: 'This course gave me the confidence I needed to use computers at work. Akash explains everything so clearly and patiently. Highly recommended!'
      },
      {
        id: 2,
        name: 'Rahul Kumar',
        rating: 5,
        date: '1 month ago',
        text: 'As a small business owner, this course helped me manage my business online. I can now handle all my digital needs independently. Thank you!'
      },
      {
        id: 3,
        name: 'Anjali Patel',
        rating: 4,
        date: '3 weeks ago',
        text: 'Great course for beginners. The instructor is very patient and the content is practical. I feel much more confident using technology now.'
      },
      {
        id: 4,
        name: 'Vikram Singh',
        rating: 5,
        date: '2 months ago',
        text: 'At 65, I was worried about being left behind in the digital world. This course made learning technology easy and enjoyable. Excellent!'
      }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    // Initialize course data immediately to prevent null reference errors
    this.course = this.courseData;
    
    // Sanitize the video URL for safe use in iframe
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.courseData.videoPreview);
    
    // In a real app, you would fetch course data based on the ID
    // this.route.params.subscribe(params => {
    //   const courseId = params['id'];
    //   // Fetch course data from service
    //   this.course = this.courseData; // For demo purposes
    // });
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  enrollCourse() {
    alert('Course enrollment functionality would be implemented here!');
  }
}
