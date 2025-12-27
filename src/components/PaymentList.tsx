import { FlatList, StyleSheet, Text, View } from 'react-native'
import  {  useState } from 'react'
import { CashIcon, MastercardIcon, PaypalIcon, VisaIcon } from '../assets/Icons';
import PayMethodCard from './PayMethodCard';
import { s, vs } from 'react-native-size-matters';


const paymentMethods = [
    {label: 'Cash', icon:<CashIcon/> },
    {label: 'Visa', icon:<VisaIcon/> },
    {label: 'Master Card', icon:<MastercardIcon/> },
    {label: 'PayPAl', icon:<PaypalIcon/> },
];

const PaymentList = () => {
    const [selectedMethod, setSelectedMethod] = useState<string>('');
  return (
    <View>
      <FlatList
      data={paymentMethods}
      keyExtractor={(item) => item.label}
      renderItem={({item}) => (
        <PayMethodCard 
          title={item.label} 
          icon={item.icon} 
          onPress={() => setSelectedMethod(item.label)} 
          isSelected={selectedMethod === item.label} 
        />
      )}
      horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap:16, paddingHorizontal:s(16), paddingTop:vs(15)}}
      />
    </View>
  )
}

export default PaymentList

const styles = StyleSheet.create({})