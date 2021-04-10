import IModalProps from '../../types/modalProps';

/**
 * The privacy policy modal props interface.
 */
export default interface IPrivacyPolicyModalProps extends IModalProps {
  onFetchClick?: () => void;
}
