<script setup>
import { ref } from 'vue'

const experiences = [
  {
    id: 1,
    role: 'Sr. Software Engineer 1',
    company: 'Nowcom Global Services',
    period: 'Dec 2021 - Dec 2025 ( 4 Yrs )',
    responsibilities: [
      'Designed and implemented robust, secure, and scalable backend APIs using C# and .NET Core.',
      'Ensured data integrity, accuracy, and system reliability through rigorous validation and quality assurance processes.',
      'lead team operations, driving delivery of high-priority features within deadlines, and facilitating effective task management and planning.'
    ],
    accomplishments:[
      'Developed a comprehensive Vehicle Auction Platform that streamlined bidding processes and enhanced user engagement.',
      'Engineered a real-time chat application that empowered sales teams to manage and respond to customer inquiries more efficiently, enhancing communication workflows.',
      'Led the re-architecture of an inventory management service, transitioning from a legacy SOAP-based .NET Framework implementation to a lightweight, microservices-oriented architecture, significantly improving performance and maintainability.'
    ]
  },
  {
    id: 1,
    role: 'Mid. Software Engineer',
    company: 'Nowcom Global Services',
    period: 'Oct 2018 - Dec 2021 ( 3 Yrs )',
    responsibilities: [
      'Developed dynamic and responsive user interfaces using Angular to enhance user experience and functionality.',
      'Collaborated with cross-functional teams to gather, analyze, and translate business requirements into scalable technical solutions.',
    ],
    accomplishments:[
      'Contributed to the successful migration of the company’s flagship monolithic application to a modern microservices-based architecture, improving system maintainability and scalability.',
      'Delivered new features and resolved high-priority support issues for the flagship product, contributing to product stability and enhanced user satisfaction.',
      'Built a secure payment collection system allowing customers to place deposits on vehicle reservations, streamlining reservation workflows and improving the purchasing experience.'
    ]
  },
  {
    id: 2,
    role: 'PHP Wordpress Developer',
    company: 'Nowcom Global Services',
    period: 'Sept 2015 - Oct 2018 ( 3 Yrs )',
    responsibilities: [
      'Develop custom themes and plugins based on project requirements.',
      'Design, implement, and manage WordPress websites for clients or internal projects.',
      'Customize existing themes and plugins, ensuring compatibility with WordPress standards and best practices.'
    ],
    accomplishments:[
      'Redesigned and implemented custom themes for the Dealer Website V2 platform in collaboration with the design team, enhancing visual appeal and user experience',
      'Refactored and optimized the Dealer Website V2 platform for a key client, North Hollywood Toyota, delivering a modernized and mobile-friendly solution aligned with brand standards.'
    ]
  },
]

const expanded = ref(experiences.map(() => false))
</script>

<template>
  <section class="section-wrapper">
    <h2 class="section-title">Work Experience</h2>

    <div class="experience-list">
      <div v-for="(exp, index) in experiences" :key="index" class="experience-item">
        <div class="experience-header">
          <span class="experience-role">{{ exp.role }}</span>
          <span class="experience-separator"> | </span>
          <span class="experience-company">{{ exp.company }}</span>
          <span class="experience-period">{{ exp.period }}</span>
        </div>

        <div class="experience-body" :class="{ 'is-expanded': expanded[index] }">
          <div class="experience-section">
            <p class="experience-section-label">Responsibilities</p>
            <ul class="experience-list-items">
              <li v-for="(item, i) in exp.responsibilities" :key="i">{{ item }}</li>
            </ul>
          </div>
          <div v-if="exp.accomplishments?.length" class="experience-section">
            <p class="experience-section-label">Accomplishments</p>
            <ul class="experience-list-items">
              <li v-for="(item, i) in exp.accomplishments" :key="i">{{ item }}</li>
            </ul>
          </div>
        </div>

        <button class="view-more-btn" @click="expanded[index] = !expanded[index]">
          {{ expanded[index] ? 'View less ▲' : 'View more ▼' }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 635px;
  margin: 0 auto;
}

.experience-role,
.experience-company {
  font-weight: 700;
  color: var(--text-heading);
  font-size: 0.95rem;
}

.experience-separator {
  color: var(--text-body);
  margin: 0 0.15rem;
}

.experience-period {
  color: var(--text-body);
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

.experience-body {
  max-height: 100px;
  overflow: hidden;
  transition: max-height 0.4s ease;
  position: relative;
}

.experience-body:not(.is-expanded)::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2rem;
  background: linear-gradient(to bottom, transparent, var(--bg, #fff));
  pointer-events: none;
}

.experience-body.is-expanded {
  max-height: 1000px;
}

.view-more-btn {
  display: block;
  margin: 0.5rem auto 0;
  background: none;
  border: none;
  color: var(--text-heading);
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  letter-spacing: 0.02em;
  text-decoration: underline;
}

.view-more-btn:hover {
  text-decoration: underline;
}

.experience-section-label {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary);
  margin-bottom: 0.3rem;
}

.experience-list-items {
  padding-left: 1.25rem;
}

.experience-list-items li {
  font-size: 0.92rem;
  color: var(--text-body);
  margin-bottom: 0.3rem;
}
</style>
