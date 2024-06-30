
import javax.swing.JFrame;
import javax.swing.JLabel;

    public  class Mainframe {
      public static void main(String[] args) {
       abc a =new abc();
       a.setVisible(true);  
       a.setSize(6,7 );
      }
    }
    class abc extends JFrame{
      public abc(){
         JLabel j = new JLabel("Hello world");
         add(j);
        }
    }
