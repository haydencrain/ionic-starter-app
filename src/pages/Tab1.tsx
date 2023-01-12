import {
  IonButton,
  IonContent,
  IonHeader,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const modal = React.useRef<HTMLIonModalElement>(null); // HTMLIonModalElement' is not defined. eslint(no-undef)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonButton id="open-modal">Open Modal</IonButton>
        <IonModal id="example-modal" ref={modal} trigger="open-modal">
          <div>hello i am a modal</div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
