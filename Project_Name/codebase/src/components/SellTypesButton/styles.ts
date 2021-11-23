import { border, dimensions } from '@nft/styles';
import { AlignTypes } from '@nft/utils/enum';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    height: dimensions.height110,
    alignItems: AlignTypes.CENTER,
    justifyContent: AlignTypes.CENTER,
    marginRight: dimensions.spacingStackXs8,
    paddingHorizontal: dimensions.spacingStackSm17,
    borderRadius: border.radius.lg10,
    width: dimensions.height110,
  },
  text: {
    marginRight: dimensions.spacingStackSmall5,
  },
});

export default styles;
