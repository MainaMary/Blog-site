import { ReactNode } from "react";
export interface BtnProps {
    name?:string ;
    icon?: ReactNode;
    onClick?:(x:any)=>void;
    type?: "button" | "submit" | "reset";
    children?: string | ReactNode,
    disabled?: boolean;
    className?: string;

}
export interface Inputprops {
    onChange: (x:any)=> void;
    type:string;
    name: string;
    placeholder? :string;
    value?:string;
    required?:boolean;
    multiple?: boolean
  
  }
  export interface LabelProps {
    children:string
  }
  export interface FormProps {
    email: string;
    password: string
  }
  export interface CommentProps {
    postId:string;
    id:string;
    name:string;
    email:string;
    body:string
  }
  export interface UserProps {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo : {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }
  export interface ModalProps {
    openModal?: boolean;
    handleModal? : () => void;
   
  }
  export interface PostProps {
    body: string;
    id?: string;
    title: string;
    userId?: string;
  }
  
  export const menuItems = [
    {label:"Home",
    path:"/",
    id:1
},
{
    label:"All Posts",
    path:"/posts",
    id:2
},
{
    label:"Add Post",
    path:"/userPosts",
    id:3
}
]