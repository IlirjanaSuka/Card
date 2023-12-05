// App.js

function createCard({ title, label, imageUrl, buttonLabel, content, date }) {
  const card = document.createElement('div');
  card.classList.add('card');

  const contentContainer = document.createElement('div');
  contentContainer.classList.add('content-container');

  const dateElement = document.createElement('div');
  dateElement.classList.add('date');
  dateElement.innerText = date;
  card.appendChild(dateElement);

  const labelElement = document.createElement('div');
  labelElement.classList.add('label', label);
  labelElement.innerText = label;
  contentContainer.appendChild(labelElement);

  const imageElement = document.createElement('img');
  imageElement.classList.add('image');
  imageElement.src = imageUrl;
  contentContainer.appendChild(imageElement);

  const titleElement = document.createElement('div');
  titleElement.classList.add('title');
  titleElement.innerText = title;
  contentContainer.appendChild(titleElement);

  card.appendChild(contentContainer);

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  const downloadButton = document.createElement('button');
  downloadButton.classList.add('button');
  downloadButton.innerText = buttonLabel;
  buttonContainer.appendChild(downloadButton);

  card.appendChild(buttonContainer);

  const contentElement = document.createElement('p');
  contentElement.classList.add('p');
  contentElement.innerText = content;
  card.appendChild(contentElement);

  return card;
}

function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `4.X.X(${year}-${month}-${day})`;
}

document.addEventListener('DOMContentLoaded', function () {
  const cardContainer = document.getElementById('cardContainer');
  const cardProps = [
      { title: 'Test Test', label: 'New', imageUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg', content: 'This is just an example, enough to complete the content for the task that was given to me. So dont pay attention to the content.', buttonLabel: 'Download' },
      { title: 'Test Test', label: 'Fix', imageUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg', content: 'This is just an example, enough to complete the content for the task that was given to me. So dont pay attention to the content.', buttonLabel: 'Download' },
      { title: 'Test Test', label: 'Improvement', imageUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg', content: 'This is just an example, enough to complete the content for the task that was given to me. So dont pay attention to the content.', buttonLabel: 'Download' },
      { title: 'Test Test', label: 'New', imageUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg', content: 'This is just an example, enough to complete the content for the task that was given to me. So dont pay attention to the content.', buttonLabel: 'Download' },
      { title: 'Test Test', label: 'Fix', imageUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg', content: 'This is just an example, enough to complete the content for the task that was given to me. So dont pay attention to the content.', buttonLabel: 'Download' },
      { title: 'Test Test', label: 'Improvement', imageUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg', content: 'This is just an example, enough to complete the content for the task that was given to me. So dont pay attention to the content.', buttonLabel: 'Download' },
      { title: 'Test Test', label: 'New', imageUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg', content: 'This is just an example, enough to complete the content for the task that was given to me. So dont pay attention to the content.', buttonLabel: 'Download' },
      { title: 'Test Test', label: 'Fix',imageUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg', content: 'This is just an example, enough to complete the content for the task that was given to me. So dont pay attention to the content.', buttonLabel: 'Download' },
      { title: 'Test Test', label: 'Improvement', imageUrl: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg', content: 'This is just an example, enough to complete the content for the task that was given to me. So dont pay attention to the content.', buttonLabel: 'Download' },
      // Add more data as needed
  ];
  const cardPropsWithDate = cardProps.map(props => ({
      date: getCurrentDate(),
      ...props,
  }));

  cardPropsWithDate.forEach(props => {
      const card = createCard(props);
      cardContainer.appendChild(card);
  });
});
