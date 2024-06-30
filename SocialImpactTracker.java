    import javax.swing.*;
    import java.awt.*;
    import java.awt.event.ActionEvent;
    import java.awt.event.ActionListener;
    import java.util.Scanner;

import javax.swing.table.DefaultTableModel;
    
    public class SocialImpactTracker {
        private JFrame frame;
        private JPanel panel;
        private JButton trackButton;
        private JTextArea impactData;
        private JTextField impactField;
        private JTable impactTable;
        private DefaultTableModel tableModel;
    
        public SocialImpactTracker() {
            frame = new JFrame("Social Impact Tracker");
            panel = new JPanel(new BorderLayout());
            trackButton = new JButton("Track Impact");
            impactData = new JTextArea();
            impactField = new JTextField();
    
            String[] columnNames = {"Impact ID", "Impact Description"};
            tableModel = new DefaultTableModel(columnNames, 0);
            impactTable = new JTable(tableModel);
    
            trackButton.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                 Scanner s = new Scanner(System.in);
                 String impactId = s.next(); 
                    String impactDescription = impactField.getText();
                    Object[] row = {impactId, impactDescription};
                    tableModel.addRow(row);
                }
            });
    
            panel.add(impactField, BorderLayout.NORTH);
            panel.add(new JScrollPane(impactTable), BorderLayout.CENTER);
            panel.add(trackButton, BorderLayout.SOUTH);
    
            frame.add(panel);
            frame.setSize(400, 400);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setVisible(true);
        }
    
        public static void main(String[] args) {
            new SocialImpactTracker();
        }
    }
    


