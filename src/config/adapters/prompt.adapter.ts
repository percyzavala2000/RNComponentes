
import prompt from 'react-native-prompt-android';

interface Options  {
  title:string;
  subTitle:string;
  buttons:PromptButton[];
  promptType: 'default'|'plain-text' | 'secure-text';
  placeholder?:string;
  defaultValue?:string;
  }
  interface PromptButton {
    text: string;
    onPress: (password: string) => void;
    style?: 'default' | 'cancel' | 'destructive';
  }

export const showPrompt = ({title,subTitle,buttons,promptType,placeholder,defaultValue}:Options) => {
// render
prompt(
  title,
  subTitle,
  buttons,
  {
      type: promptType,
      cancelable: false,
      defaultValue: defaultValue,
      placeholder: placeholder
  }
);
}
