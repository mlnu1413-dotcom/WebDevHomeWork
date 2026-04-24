const { createApp } = Vue;

createApp({
  data() {
    return {
      profileImage: 'profile.png',
      foodImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
      selectedAuthor: null,
      authors: [
        {
          name: 'Brianna',
          date: 'February 18, 2021 @ 3:30 pm',
          foodieLevel: 'Novice',
          bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!',
          comment: 'Was amazing! My Walmart didn\'t have coriander in stock and didn\'t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!'
        },
        {
          name: 'LINH',
          date: 'February 18, 2021 @ 9:48 pm',
          foodieLevel: 'Newcomer',
          bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.',
          comment: 'I just made this soup and I have to say I didn\'t have corn at home but still turned out very good. It\'s a winner in my house. My husband since my dad has gout he can\'t eat beef, this was perfect for him. Thanks you Lisa!'
        },
        {
          name: 'CATHERINE LEONARDO',
          date: 'February 18, 2021 @ 2:58 pm',
          foodieLevel: 'Mentor',
          bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!',
          comment: 'I LOVE this White Chicken Chili. You are right, it is delicious—delicious with toasted bread. Refreshingly different from the red chili I have made in the past. I made it exactly as written and I loved the lime juice and cilantro. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.'
        },
        {
          name: 'KALI',
          date: 'February 13, 2021 @ 11:31 am',
          foodieLevel: 'Novice',
          bio: 'Food is my passion. So is adventure and trying new things. I have to admit I\'m a food whore! Invite me over for dinner and I\'ll be there!',
          comment: 'This recipe is dynamite! My partner usually won\'t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!'
        }
      ]
    }
  },
  components: {
    'nav-menu': {
      template: `
        <nav class="navbar navbar-expand-lg navbar-custom">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item" v-for="item in menuItems" :key="item">
                  <a class="nav-link" href="#">{{ item }}</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      `,
      data() {
        return {
          menuItems: ['Home', 'Recipes', 'Lifestyles', 'Videos', 'About']
        }
      }
    }
  },
  methods: {
    showAuthorInfo(author) {
      this.selectedAuthor = author;
    },
    closeModal() {
      this.selectedAuthor = null;
    }
  }
}).mount('#app');
