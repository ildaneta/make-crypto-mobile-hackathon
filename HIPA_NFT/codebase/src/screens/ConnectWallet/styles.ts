import { StyleSheet } from 'react-native';
import { dimensions } from '@nft/styles';
import { AlignTypes } from '@nft/utils/enum';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: dimensions.spacingStackXxl16,
  },
  heading: {
    justifyContent: AlignTypes.CENTER,
    alignItems: AlignTypes.CENTER,
  },
  description: {
    marginHorizontal: dimensions.spacingInlineXxs12,
    marginTop: dimensions.spacingStackXxs7,
    marginBottom: dimensions.spacingInlineXxl32,
  },
  descriptionText: {
    textAlign: AlignTypes.CENTER,
  },
  pillButton: {
    marginBottom: dimensions.spacingInlineXs14,
  },
});

export default styles;
