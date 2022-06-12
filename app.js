const App = {
  data() {
    return {
      placeholderString: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2'],
    };
  },
  mounted() {
    this.getNotes();
  },
  methods: {
    getNotes() {
      const localNotes = localStorage.getItem('notes');
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    },
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    },
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList));
      },
      deep: true,
    },
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = '';
      }
    },
  },
};

Vue.createApp(App).mount('#app');



