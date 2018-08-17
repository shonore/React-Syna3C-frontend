// Type definitions for Grommet
// Project: https://github.com/grommet/grommet
// Definitions by: Ryan C. Collins <https://www.ryancollins.io/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="react" />

declare module "grommet" {
  // Components
  export import Accordion = Grommet.Accordion;
  export import AccordionPanel = Grommet.AccordionPanel;
  export import Anchor = Grommet.Anchor;
  export import Animate = Grommet.Animate;
  export import App = Grommet.App;
  export import Article = Grommet.Article;
  export import Box = Grommet.Box;
  export import Button = Grommet.Button;
  export import Card = Grommet.Card;
  export import Carousel = Grommet.Carousel;
  export import CheckBox = Grommet.CheckBox;
  export import Columns = Grommet.Columns;
  export import DateTime = Grommet.DateTime;
  export import Distribution = Grommet.Distribution;
  export import Footer = Grommet.Footer;
  export import Form = Grommet.Form;
  export import FormattedMessage = Grommet.FormattedMessage;
  export import FormField = Grommet.FormField;
  export import FormFields = Grommet.FormFields;
  export import Header = Grommet.Header;
  export import Heading = Grommet.Heading;
  export import Headline = Grommet.Headline;
  export import Hero = Grommet.Hero;
  export import Image = Grommet.Image;
  export import Label = Grommet.Label;
  export import Layer = Grommet.Layer;
  export import Legend = Grommet.Legend;
  export import List = Grommet.List;
  export import ListItem = Grommet.ListItem;
  export import LoginForm = Grommet.LoginForm;
  export import Map = Grommet.Map;
  export import Markdown = Grommet.Markdown;
  export import Menu = Grommet.Menu;
  export import Meter = Grommet.Meter;
  export import Notification = Grommet.Notification;
  export import NumberInput = Grommet.NumberInput;
  export import Paragraph = Grommet.Paragraph;
  export import Quote = Grommet.Quote;
  export import RadioButton = Grommet.RadioButton;
  export import Search = Grommet.Search;
  export import SearchInput = Grommet.SearchInput;
  export import Section = Grommet.Section;
  export import Select = Grommet.Select;
  export import Sidebar = Grommet.Sidebar;
  export import SkipLinkAnchor = Grommet.SkipLinkAnchor;
  export import SkipLinks = Grommet.SkipLinks;
  export import SocialShare = Grommet.SocialShare;
  export import Split = Grommet.Split;
  export import SunBurst = Grommet.SunBurst;
  export import SVGIcon = Grommet.SVGIcon;
  export import Tab = Grommet.Tab;
  export import Table = Grommet.Table;
  export import TableHeader = Grommet.TableHeader;
  export import TableRow = Grommet.TableRow;
  export import Tabs = Grommet.Tabs;
  export import TextInput = Grommet.TextInput;
  export import Tile = Grommet.Tile;
  export import Tiles = Grommet.Tiles;
  export import Timestamp = Grommet.Timestamp;
  export import Tip = Grommet.Tip;
  export import Title = Grommet.Title;
  export import Toast = Grommet.Toast;
  export import Topology = Grommet.Topology;
  export import Value = Grommet.Value;
  export import Video = Grommet.Video;
  export import WorldMap = Grommet.WorldMap;

  // Icons
  export import ThreeDIcon = Grommet.Icon;
  export import AccessAccessibilityIcon = Grommet.Icon;
  export import AccessAdIcon = Grommet.Icon;
  export import AccessAssistListeningIcon = Grommet.Icon;
  export import AccessBrailleIcon = Grommet.Icon;
  export import AccessSignIcon = Grommet.Icon;
  export import AccessTtyIcon = Grommet.Icon;
  export import AccessVolumeControlIcon = Grommet.Icon;
  export import AccessWheelchairActiveIcon = Grommet.Icon;
  export import AccessWheelchairIcon = Grommet.Icon;
  export import AccessibleIcon = Grommet.Icon;
  export import AchievementIcon = Grommet.Icon;
  export import ActionIcon = Grommet.Icon;
  export import ActionsIcon = Grommet.Icon;
  export import AddChapterIcon = Grommet.Icon;
  export import AddCircleIcon = Grommet.Icon;
  export import AddIcon = Grommet.Icon;
  export import AedIcon = Grommet.Icon;
  export import AggregateIcon = Grommet.Icon;
  export import AidOptionIcon = Grommet.Icon;
  export import AidIcon = Grommet.Icon;
  export import AlarmIcon = Grommet.Icon;
  export import AlertIcon = Grommet.Icon;
  export import AnalyticsIcon = Grommet.Icon;
  export import AnnounceIcon = Grommet.Icon;
  export import AppsIcon = Grommet.Icon;
  export import ArchiveIcon = Grommet.Icon;
  export import ArticleIcon = Grommet.Icon;
  export import AscendIcon = Grommet.Icon;
  export import AtmIcon = Grommet.Icon;
  export import AttachmentIcon = Grommet.Icon;
  export import AttractionIcon = Grommet.Icon;
  export import BabyIcon = Grommet.Icon;
  export import BackTenIcon = Grommet.Icon;
  export import BarChartIcon = Grommet.Icon;
  export import BarIcon = Grommet.Icon;
  export import BasketIcon = Grommet.Icon;
  export import BlogIcon = Grommet.Icon;
  export import BookIcon = Grommet.Icon;
  export import BookmarkIcon = Grommet.Icon;
  export import BottomCornerIcon = Grommet.Icon;
  export import BrandAppleAppStoreIcon = Grommet.Icon;
  export import BrandCodepenEditIcon = Grommet.Icon;
  export import BrandCodepenTryIcon = Grommet.Icon;
  export import BrandGooglePlayIcon = Grommet.Icon;
  export import BrandGrommetOutlineIcon = Grommet.Icon;
  export import BrandGrommetPathIcon = Grommet.Icon;
  export import BrandHpeElementOutlineIcon = Grommet.Icon;
  export import BrandHpeElementPathIcon = Grommet.Icon;
  export import BrandHpeLabsInsigniaOutlineIcon = Grommet.Icon;
  export import BrandHpeLabsInsigniaIcon = Grommet.Icon;
  export import BrandHpeStackCenteredIcon = Grommet.Icon;
  export import BrandHpeStackIcon = Grommet.Icon;
  export import BriefcaseIcon = Grommet.Icon;
  export import BrushIcon = Grommet.Icon;
  export import BugIcon = Grommet.Icon;
  export import BundleIcon = Grommet.Icon;
  export import BusIcon = Grommet.Icon;
  export import BusinessServiceIcon = Grommet.Icon;
  export import CafeteriaIcon = Grommet.Icon;
  export import CalculatorIcon = Grommet.Icon;
  export import CalendarIcon = Grommet.Icon;
  export import CameraIcon = Grommet.Icon;
  export import CapacityIcon = Grommet.Icon;
  export import CarIcon = Grommet.Icon;
  export import CaretBackIcon = Grommet.Icon;
  export import CaretDownIcon = Grommet.Icon;
  export import CaretNextIcon = Grommet.Icon;
  export import CaretPreviousIcon = Grommet.Icon;
  export import CaretUpIcon = Grommet.Icon;
  export import CartIcon = Grommet.Icon;
  export import CatalogOptionIcon = Grommet.Icon;
  export import CatalogIcon = Grommet.Icon;
  export import ChannelIcon = Grommet.Icon;
  export import ChapterAddIcon = Grommet.Icon;
  export import ChapterNextIcon = Grommet.Icon;
  export import ChapterPreviousIcon = Grommet.Icon;
  export import ChatIcon = Grommet.Icon;
  export import CheckboxSelectedIcon = Grommet.Icon;
  export import CheckboxIcon = Grommet.Icon;
  export import CheckmarkIcon = Grommet.Icon;
  export import CircleInformationIcon = Grommet.Icon;
  export import CirclePlayIcon = Grommet.Icon;
  export import CircleQuestionIcon = Grommet.Icon;
  export import ClearOptionIcon = Grommet.Icon;
  export import ClearIcon = Grommet.Icon;
  export import CliIcon = Grommet.Icon;
  export import ClipboardIcon = Grommet.Icon;
  export import ClockIcon = Grommet.Icon;
  export import CloneIcon = Grommet.Icon;
  export import CloseIcon = Grommet.Icon;
  export import ClosedCaptionIcon = Grommet.Icon;
  export import CloudComputerIcon = Grommet.Icon;
  export import CloudDownloadIcon = Grommet.Icon;
  export import CloudSoftwareIcon = Grommet.Icon;
  export import CloudUploadIcon = Grommet.Icon;
  export import CloudIcon = Grommet.Icon;
  export import ClusterIcon = Grommet.Icon;
  export import CoatCheckIcon = Grommet.Icon;
  export import CodeIcon = Grommet.Icon;
  export import ColumnsIcon = Grommet.Icon;
  export import CompareIcon = Grommet.Icon;
  export import CompassIcon = Grommet.Icon;
  export import ComplianceIcon = Grommet.Icon;
  export import ConfigureIcon = Grommet.Icon;
  export import ConnectIcon = Grommet.Icon;
  export import ContactInfoIcon = Grommet.Icon;
  export import ContactIcon = Grommet.Icon;
  export import ContractIcon = Grommet.Icon;
  export import CopyIcon = Grommet.Icon;
  export import CreditCardIcon = Grommet.Icon;
  export import CubeIcon = Grommet.Icon;
  export import CubesIcon = Grommet.Icon;
  export import CurrencyIcon = Grommet.Icon;
  export import CursorIcon = Grommet.Icon;
  export import CutIcon = Grommet.Icon;
  export import CycleIcon = Grommet.Icon;
  export import DashboardIcon = Grommet.Icon;
  export import DatabaseIcon = Grommet.Icon;
  export import DeliverIcon = Grommet.Icon;
  export import DeployIcon = Grommet.Icon;
  export import DescendIcon = Grommet.Icon;
  export import DesktopIcon = Grommet.Icon;
  export import DetachIcon = Grommet.Icon;
  export import DiamondIcon = Grommet.Icon
  export import DirectionsIcon = Grommet.Icon;
  export import DislikeIcon = Grommet.Icon;
  export import DocumentCloudIcon = Grommet.Icon;
  export import DocumentConfigIcon = Grommet.Icon;
  export import DocumentCsvIcon = Grommet.Icon;
  export import DocumentDownloadIcon = Grommet.Icon;
  export import DocumentExcelIcon = Grommet.Icon;
  export import DocumentExeIcon = Grommet.Icon;
  export import DocumentImageIcon = Grommet.Icon;
  export import DocumentLockedIcon = Grommet.Icon;
  export import DocumentMissingIcon = Grommet.Icon;
  export import DocumentNotesIcon = Grommet.Icon;
  export import DocumentOutlookIcon = Grommet.Icon;
  export import DocumentPdfIcon = Grommet.Icon;
  export import DocumentPerformanceIcon = Grommet.Icon;
  export import DocumentPptIcon = Grommet.Icon;
  export import DocumentRtfIcon = Grommet.Icon;
  export import DocumentSoundIcon = Grommet.Icon;
  export import DocumentStoreIcon = Grommet.Icon;
  export import DocumentTestIcon = Grommet.Icon;
  export import DocumentTextIcon = Grommet.Icon;
  export import DocumentThreatIcon = Grommet.Icon;
  export import DocumentTimeIcon = Grommet.Icon;
  export import DocumentTransferIcon = Grommet.Icon;
  export import DocumentTxtIcon = Grommet.Icon
  export import DocumentUpdateIcon = Grommet.Icon;
  export import DocumentUploadIcon = Grommet.Icon
  export import DocumentUserIcon = Grommet.Icon;
  export import DocumentVerifiedIcon = Grommet.Icon;
  export import DocumentVideoIcon = Grommet.Icon;
  export import DocumentWindowsIcon = Grommet.Icon;
  export import DocumentWordIcon = Grommet.Icon;
  export import DocumentZipIcon = Grommet.Icon;
  export import DocumentIcon = Grommet.Icon;
  export import DomainIcon = Grommet.Icon;
  export import DownIcon = Grommet.Icon;
  export import DownloadIcon = Grommet.Icon;
  export import DragIcon = Grommet.Icon
  export import DriveCageIcon = Grommet.Icon;
  export import DuplicateIcon = Grommet.Icon;
  export import EditIcon = Grommet.Icon;
  export import EjectIcon = Grommet.Icon
  export import ElevatorIcon = Grommet.Icon;
  export import EmergencyIcon = Grommet.Icon;
  export import EmptyCircleIcon = Grommet.Icon;
  export import EscalatorIcon = Grommet.Icon;
  export import ExpandIcon = Grommet.Icon;
  export import FanIcon = Grommet.Icon;
  export import FastForwardIcon = Grommet.Icon;
  export import FavoriteIcon = Grommet.Icon;
  export import FilterIcon = Grommet.Icon;
  export import FingerPrintIcon = Grommet.Icon;
  export import FlagIcon = Grommet.Icon;
  export import FolderCycleIcon = Grommet.Icon;
  export import FolderOpenIcon = Grommet.Icon;
  export import FolderIcon = Grommet.Icon;
  export import FormAddIcon = Grommet.Icon;
  export import FormAttachmentIcon = Grommet.Icon;
  export import FormCalendarIcon = Grommet.Icon;
  export import FormCheckmarkIcon = Grommet.Icon;
  export import FormClockIcon = Grommet.Icon;
  export import FormCloseIcon = Grommet.Icon;
  export import FormCutIcon = Grommet.Icon;
  export import FormDownIcon = Grommet.Icon;
  export import FormEditIcon = Grommet.Icon;
  export import FormFilterIcon = Grommet.Icon;
  export import FormFolderIcon = Grommet.Icon;
  export import FormLocationIcon = Grommet.Icon;
  export import FormLockIcon = Grommet.Icon;
  export import FormNextLinkIcon = Grommet.Icon;
  export import FormNextIcon = Grommet.Icon;
  export import FormPreviousLinkIcon = Grommet.Icon;
  export import FormPreviousIcon = Grommet.Icon;
  export import FormRefreshIcon = Grommet.Icon;
  export import FormScheduleIcon = Grommet.Icon;
  export import FormSearchIcon = Grommet.Icon;
  export import FormSubtractIcon = Grommet.Icon;
  export import FormTrashIcon = Grommet.Icon;
  export import FormUpIcon = Grommet.Icon;
  export import FormUploadIcon = Grommet.Icon;
  export import ForwardTenIcon = Grommet.Icon;
  export import GalleryIcon = Grommet.Icon;
  export import GamepadIcon = Grommet.Icon;
  export import GiftIcon = Grommet.Icon;
  export import GlobeIcon = Grommet.Icon;
  export import GridIcon = Grommet.Icon;
  export import GroupIcon = Grommet.Icon;
  export import GrowIcon = Grommet.Icon;
  export import HaltIcon = Grommet.Icon;
  export import HelpIcon = Grommet.Icon;
  export import HistoryIcon = Grommet.Icon;
  export import HomeIcon = Grommet.Icon;
  export import HostMaintenanceIcon = Grommet.Icon;
  export import HostIcon = Grommet.Icon;
  export import IceCreamIcon = Grommet.Icon;
  export import ImageIcon = Grommet.Icon;
  export import ImpactIcon = Grommet.Icon;
  export import InProgressIcon = Grommet.Icon;
  export import InboxIcon = Grommet.Icon;
  export import IndicatorIcon = Grommet.Icon;
  export import InfoIcon = Grommet.Icon;
  export import InheritIcon = Grommet.Icon;
  export import InspectIcon = Grommet.Icon;
  export import InstallOptionIcon = Grommet.Icon;
  export import InstallIcon = Grommet.Icon;
  export import IntegrationIcon = Grommet.Icon;
  export import IterationIcon = Grommet.Icon;
  export import JavaIcon = Grommet.Icon;
  export import LanguageIcon = Grommet.Icon;
  export import LaunchIcon = Grommet.Icon;
  export import LayerIcon = Grommet.Icon;
  export import LicenseIcon = Grommet.Icon;
  export import LikeIcon = Grommet.Icon;
  export import LineChartIcon = Grommet.Icon;
  export import LinkBottomIcon = Grommet.Icon;
  export import LinkDownIcon = Grommet.Icon;
  export import LinkNextIcon = Grommet.Icon;
  export import LinkPreviousIcon = Grommet.Icon;
  export import LinkTopIcon = Grommet.Icon;
  export import LinkUpIcon = Grommet.Icon;
  export import LinkIcon = Grommet.Icon;
  export import LocalIcon = Grommet.Icon;
  export import LocationPinIcon = Grommet.Icon;
  export import LocationIcon = Grommet.Icon;
  export import LockIcon = Grommet.Icon;
  export import LoginIcon = Grommet.Icon;
  export import LogoutIcon = Grommet.Icon;
  export import LoungeIcon = Grommet.Icon;
  export import MagicIcon = Grommet.Icon;
  export import MailOptionIcon = Grommet.Icon;
  export import MailIcon = Grommet.Icon;
  export import ManualIcon = Grommet.Icon;
  export import MapLocationIcon = Grommet.Icon;
  export import MapIcon = Grommet.Icon;
  export import MenuIcon = Grommet.Icon;
  export import MicrophoneIcon = Grommet.Icon;
  export import MoneyIcon = Grommet.Icon;
  export import MonitorIcon = Grommet.Icon;
  export import MoreIcon = Grommet.Icon;
  export import MultipleIcon = Grommet.Icon;
  export import MusicIcon = Grommet.Icon;
  export import NavigateIcon = Grommet.Icon;
  export import NewWindowIcon = Grommet.Icon;
  export import NewIcon = Grommet.Icon;
  export import NextIcon = Grommet.Icon;
  export import NodesIcon = Grommet.Icon;
  export import NoteIcon = Grommet.Icon;
  export import NotesIcon = Grommet.Icon;
  export import NotificationIcon = Grommet.Icon;
  export import ObjectGroupIcon = Grommet.Icon;
  export import ObjectUngroupIcon = Grommet.Icon;
  export import OptimizeIcon = Grommet.Icon;
  export import OrganizationIcon = Grommet.Icon;
  export import OverviewIcon = Grommet.Icon;
  export import PaintIcon = Grommet.Icon;
  export import PanIcon = Grommet.Icon;
  export import PauseFillIcon = Grommet.Icon;
  export import PauseIcon = Grommet.Icon;
  export import PersonalComputerIcon = Grommet.Icon;
  export import PieChartIcon = Grommet.Icon;
  export import PinIcon = Grommet.Icon;
  export import PlanIcon = Grommet.Icon;
  export import PlatformAmazonIcon = Grommet.Icon;
  export import PlatformAndroidIcon = Grommet.Icon;
  export import PlatformAppleIcon = Grommet.Icon;
  export import PlatformArchlinuxIcon = Grommet.Icon;
  export import PlatformArubaIcon = Grommet.Icon;
  export import PlatformCentosIcon = Grommet.Icon;
  export import PlatformChromeIcon = Grommet.Icon;
  export import PlatformCloudlinuxIcon = Grommet.Icon;
  export import PlatformDebianIcon = Grommet.Icon;
  export import PlatformDockerIcon = Grommet.Icon;
  export import PlatformDosIcon = Grommet.Icon;
  export import PlatformDropboxIcon = Grommet.Icon;
  export import PlatformEdgeIcon = Grommet.Icon;
  export import PlatformFedoraIcon = Grommet.Icon;
  export import PlatformFirefoxIcon = Grommet.Icon;
  export import PlatformFreebsdIcon = Grommet.Icon;
  export import PlatformGoogleIcon = Grommet.Icon;
  export import PlatformHadoopIcon = Grommet.Icon;
  export import PlatformHerokuIcon = Grommet.Icon;
  export import PlatformHortonIcon = Grommet.Icon;
  export import PlatformHpIcon = Grommet.Icon;
  export import PlatformHpiIcon = Grommet.Icon;
  export import PlatformInternetExplorerIcon = Grommet.Icon;
  export import PlatformJavaIcon = Grommet.Icon;
  export import PlatformMandrivaIcon = Grommet.Icon;
  export import PlatformMysqlIcon = Grommet.Icon;
  export import PlatformNortonIcon = Grommet.Icon;
  export import PlatformOnedriveIcon = Grommet.Icon;
  export import PlatformOperaIcon = Grommet.Icon;
  export import PlatformOracleIcon = Grommet.Icon;
  export import PlatformPiedPiperIcon = Grommet.Icon;
  export import PlatformRaspberryIcon = Grommet.Icon;
  export import PlatformReactjsIcon = Grommet.Icon;
  export import PlatformRedhatIcon = Grommet.Icon;
  export import PlatformSafariOptionIcon = Grommet.Icon;
  export import PlatformSafariIcon = Grommet.Icon;
  export import PlatformScoIcon = Grommet.Icon;
  export import PlatformSolarisIcon = Grommet.Icon;
  export import PlatformSuseIcon = Grommet.Icon;
  export import PlatformSwiftIcon = Grommet.Icon;
  export import PlatformTurbolinuxIcon = Grommet.Icon;
  export import PlatformUbuntuIcon = Grommet.Icon;
  export import PlatformUnixwareIcon = Grommet.Icon;
  export import PlatformVmwareIcon = Grommet.Icon;
  export import PlatformWindowsLegacyIcon = Grommet.Icon;
  export import PlatformWindowsIcon = Grommet.Icon;
  export import PlayFillIcon = Grommet.Icon;
  export import PlayIcon = Grommet.Icon;
  export import PowerIcon = Grommet.Icon;
  export import PreviousIcon = Grommet.Icon;
  export import PrintIcon = Grommet.Icon;
  export import RadialSelectedIcon = Grommet.Icon;
  export import RadialIcon = Grommet.Icon;
  export import RefreshIcon = Grommet.Icon;
  export import ResourcesIcon = Grommet.Icon;
  export import RestaurantIcon = Grommet.Icon;
  export import RestroomMenIcon = Grommet.Icon;
  export import RestroomWomenIcon = Grommet.Icon;
  export import RestroomIcon = Grommet.Icon;
  export import ResumeIcon = Grommet.Icon;
  export import RevertIcon = Grommet.Icon;
  export import RewindIcon = Grommet.Icon;
  export import RiskIcon = Grommet.Icon;
  export import RobotIcon = Grommet.Icon;
  export import RssIcon = Grommet.Icon;
  export import RunIcon = Grommet.Icon;
  export import SatelliteIcon = Grommet.Icon;
  export import SaveIcon = Grommet.Icon;
  export import ScanIcon = Grommet.Icon;
  export import ScheduleNewIcon = Grommet.Icon;
  export import SchedulePlayIcon = Grommet.Icon;
  export import ScheduleIcon = Grommet.Icon;
  export import SchedulesIcon = Grommet.Icon;
  export import ScorecardIcon = Grommet.Icon;
  export import SearchAdvancedIcon = Grommet.Icon;
  export import SearchIcon = Grommet.Icon;
  export import SecureIcon = Grommet.Icon;
  export import SelectIcon = Grommet.Icon;
  export import SelectionIcon = Grommet.Icon;
  export import SendIcon = Grommet.Icon;
  export import ServerClusterIcon = Grommet.Icon;
  export import ServerIcon = Grommet.Icon;
  export import ServersIcon = Grommet.Icon;
  export import ServicePlayIcon = Grommet.Icon;
  export import ServicesIcon = Grommet.Icon;
  export import SettignsOptionIcon = Grommet.Icon;
  export import SettingsOptionIcon = Grommet.Icon;
  export import ShareIcon = Grommet.Icon;
  export import ShieldSecurityIcon = Grommet.Icon;
  export import ShieldIcon = Grommet.Icon;
  export import ShiftIcon = Grommet.Icon;
  export import ShopIcon = Grommet.Icon;
  export import SidebarIcon = Grommet.Icon;
  export import SocialAmazonIcon = Grommet.Icon;
  export import SocialAmexIcon = Grommet.Icon;
  export import SocialBitcoinIcon = Grommet.Icon;
  export import SocialCodepenIcon = Grommet.Icon;
  export import SocialCreativeCommonsIcon = Grommet.Icon;
  export import SocialDropboxIcon = Grommet.Icon;
  export import SocialFacebookOptionIcon = Grommet.Icon;
  export import SocialGithubIcon = Grommet.Icon;
  export import SocialGooglePlusIcon = Grommet.Icon;
  export import SocialGoogleWalletIcon = Grommet.Icon;
  export import SocialInstagramIcon = Grommet.Icon;
  export import SocialLinkedinOptionIcon = Grommet.Icon;
  export import SocialLinkedinIcon = Grommet.Icon;
  export import SocialMailIcon = Grommet.Icon;
  export import SocialMastercardIcon = Grommet.Icon;
  export import SocialMediumIcon = Grommet.Icon;
  export import SocialPaypalIcon = Grommet.Icon;
  export import SocialPinterestIcon = Grommet.Icon;
  export import SocialProductHuntIcon = Grommet.Icon;
  export import SocialRedditIcon = Grommet.Icon;
  export import SocialSkypeIcon = Grommet.Icon;
  export import SocialSlackIcon = Grommet.Icon;
  export import SocialSnapchatIcon = Grommet.Icon;
  export import SocialSquareIcon = Grommet.Icon;
  export import SocialStackOverflowIcon = Grommet.Icon;
  export import SocialStripeIcon = Grommet.Icon;
  export import SocialTumblrIcon = Grommet.Icon;
  export import SocialTwitterIcon = Grommet.Icon;
  export import SocialVimeoIcon = Grommet.Icon;
  export import SocialVineIcon = Grommet.Icon;
  export import SocialVisaIcon = Grommet.Icon;
  export import SocialWordpressIcon = Grommet.Icon;
  export import SocialYoutubeIcon = Grommet.Icon;
  export import SortIcon = Grommet.Icon;
  export import SplitIcon = Grommet.Icon;
  export import SplitsIcon = Grommet.Icon;
  export import StakeholderIcon = Grommet.Icon;
  export import Standards3dEffectsIcon = Grommet.Icon;
  export import StandardsConnectivityIcon = Grommet.Icon;
  export import StandardsCss3Icon = Grommet.Icon;
  export import StandardsDeviceIcon = Grommet.Icon;
  export import StandardsFireballIcon = Grommet.Icon;
  export import StandardsHtml5Icon = Grommet.Icon;
  export import StandardsMultimediaIcon = Grommet.Icon;
  export import StandardsOfflineStorageIcon = Grommet.Icon;
  export import StandardsPerformanceIcon = Grommet.Icon;
  export import StandardsSematicsIcon = Grommet.Icon;
  export import StarHalfIcon = Grommet.Icon;
  export import StarIcon = Grommet.Icon;
  export import StepsOptionIcon = Grommet.Icon;
  export import StepsIcon = Grommet.Icon
  export import StopFillIcon = Grommet.Icon;
  export import StopIcon = Grommet.Icon;
  export import StorageIcon = Grommet.Icon;
  export import StreetViewIcon = Grommet.Icon;
  export import SubtractCircleIcon = Grommet.Icon;
  export import SubtractIcon = Grommet.Icon;
  export import SupportIcon = Grommet.Icon;
  export import SyncIcon = Grommet.Icon;
  export import SystemIcon = Grommet.Icon;
  export import TableAddIcon = Grommet.Icon;
  export import TableIcon = Grommet.Icon;
  export import TagIcon = Grommet.Icon;
  export import TargetIcon = Grommet.Icon;
  export import TaskIcon = Grommet.Icon;
  export import TasksIcon = Grommet.Icon;
  export import TechnologyIcon = Grommet.Icon;
  export import TemplateIcon = Grommet.Icon;
  export import TerminalIcon = Grommet.Icon;
  export import TestDesktopIcon = Grommet.Icon;
  export import TestIcon = Grommet.Icon;
  export import TextWrapIcon = Grommet.Icon;
  export import ThreatsIcon = Grommet.Icon;
  export import TicketIcon = Grommet.Icon;
  export import TipIcon = Grommet.Icon;
  export import ToastIcon = Grommet.Icon;
  export import ToolsIcon = Grommet.Icon;
  export import TooltipIcon = Grommet.Icon;
  export import TopCornerIcon = Grommet.Icon;
  export import TransactionIcon = Grommet.Icon;
  export import TrashIcon = Grommet.Icon;
  export import TreeOptionIcon = Grommet.Icon;
  export import TreeIcon = Grommet.Icon;
  export import TriggerIcon = Grommet.Icon;
  export import TrophyIcon = Grommet.Icon;
  export import TroubleshootIcon = Grommet.Icon;
  export import UnlinkIcon = Grommet.Icon;
  export import UnlockIcon = Grommet.Icon;
  export import UpIcon = Grommet.Icon;
  export import UpdateIcon = Grommet.Icon;
  export import UpgradeIcon = Grommet.Icon;
  export import UploadIcon = Grommet.Icon;
  export import UserAddIcon = Grommet.Icon;
  export import UserAdminIcon = Grommet.Icon;
  export import UserExpertIcon = Grommet.Icon;
  export import UserFemaleIcon = Grommet.Icon;
  export import UserManagerIcon = Grommet.Icon;
  export import UserNewIcon = Grommet.Icon;
  export import UserPoliceIcon = Grommet.Icon;
  export import UserSettingsIcon = Grommet.Icon;
  export import UserWorkerIcon = Grommet.Icon;
  export import UserIcon = Grommet.Icon;
  export import ValidateIcon = Grommet.Icon;
  export import VideoIcon = Grommet.Icon;
  export import ViewIcon = Grommet.Icon;
  export import VirtualMachineIcon = Grommet.Icon;
  export import VmMaintenanceIcon = Grommet.Icon;
  export import VolumeLowIcon = Grommet.Icon;
  export import VolumeMuteIcon = Grommet.Icon;
  export import VolumeIcon = Grommet.Icon;
  export import VulnerabilityIcon = Grommet.Icon;
  export import WaypointIcon = Grommet.Icon;
  export import WorkshopIcon = Grommet.Icon;
  export import ZoomInIcon = Grommet.Icon;
  export import ZoomOutIcon = Grommet.Icon;
}

// tslint:disable forbidden-types
declare namespace Grommet {
  interface AccordionProps {
    active?: number | number[];
    animate?: boolean;
    onActive?: (index: number) => {};
    openMulti?: boolean;
  }

  export class Accordion extends React.Component<AccordionProps, any> {
    render(): JSX.Element;
  }

  interface AccordionPanelProps {
    a11yTitle?: string;
    active?: boolean;
    animate?: boolean;
    heading?: React.ReactNode;
    onChange?: () => {};
    pad?: any;
  }

  export class AccordionPanel extends React.Component<AccordionPanelProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface AnchorProps {
    a11yTitle?: string;
    align?: 'start' | 'center' | 'end';
    animateIcon?: boolean;
    className?: string;
    disabled?: boolean;
    href?: string;
    icon?: React.ReactNode | JSX.Element;
    id?: string;
    label?: string;
    method?: 'push' | 'replace';
    onClick?: (event: Event) => {};
    path?: string;
    primary?: boolean;
    reverse?: boolean;
    tag?: string;
    target?: string;
  }

  export class Anchor extends React.Component<AnchorProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface AnimateProps {
    component?: string | React.ReactElement<any>;
    enter?: GrommetCustomTypes.AnimationDetails;
    keep?: boolean;
    leave: GrommetCustomTypes.AnimationDetails;
    visible?: 'scroll' | boolean;
  }

  export class Animate extends React.Component<AnimateProps, any> {
    render(): JSX.Element;
  }

  interface AppProps {
    centered?: boolean;
    inline?: boolean;
  }

  export class App extends React.Component<AppProps, any> {
    render(): JSX.Element;
  }

  interface ArticleProps extends BoxProps<Article> {
    controls?: boolean;
    onProgress?: (progress: number) => {};
    onSelect?: (index: number) => {};
    scrollStep?: boolean;
    selected?: number;
  }

  export class Article extends React.Component<ArticleProps, any> {
    render(): JSX.Element;
  }

  export interface BoxProps<T> {
    a11yTitle?: string | any;
    announce?: boolean;
    align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
    alignContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'stretch';
    alignSelf?: 'start' | 'center' | 'end' | 'stretch';
    appCentered?: boolean;
    backgroundImage?: string;
    basis?: GrommetBoxTypes.BoxSizes;
    colorIndex?: string;
    containerClassName?: string;
    direction?: 'row' | 'column';
    focusable?: boolean;
    flex?: 'grow' | 'shrink' | boolean;
    full?: 'horizontal' | 'vertical' | boolean;
    onClick?: () => {};
    justify?: 'start' | 'center' | 'between' | 'end';
    margin?: GrommetBoxTypes.MarginSizes | {
      bottom: GrommetBoxTypes.MarginSizes;
      horizontal: GrommetBoxTypes.MarginSizes;
      left: GrommetBoxTypes.MarginSizes;
      right: GrommetBoxTypes.MarginSizes;
      top: GrommetBoxTypes.MarginSizes;
      vertical: GrommetBoxTypes.MarginSizes;
    };
    pad?: GrommetBoxTypes.PadSizes | {
      between?: GrommetBoxTypes.PadSizes;
      horizontal?: GrommetBoxTypes.PadSizes;
      vertical?: GrommetBoxTypes.PadSizes;
    };
    primary?: boolean;
    reverse?: boolean;
    responsive?: boolean;
    role?: string;
    separator?: 'top' | 'bottom' | 'left' | 'right' | 'horizontal' | 'vertical' | 'all' | 'none';
    size?: GrommetBoxTypes.Size | GrommetBoxTypes.ObjectSizes;
    tag?: string;
    textAlign?: 'left' | 'center' | 'right';
    texture?: React.ReactNode | string;
    wrap?: boolean;
    onFocus?: (event: Event) => {};
  }

  export class Box extends React.Component<BoxProps<Box>, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface ButtonProps {
    a11yTitle?: string;
    accent?: boolean;
    align?: 'start' | 'center' | 'end';
    fill?: boolean;
    href?: string;
    icon?: React.ReactElement<IconProps>;
    label?: React.ReactNode;
    method?: 'push' | 'replace';
    onFocus?: (event: Event) => {};
    path?: string;
    plain?: boolean;
    primary?: boolean;
    reverse?: boolean;
    secondary?: boolean;
    type?: 'button' | 'reset' | 'submit';
  }

  export class Button extends React.Component<ButtonProps, any> {
    render(): JSX.Element;
  }

  interface CardProps extends BoxProps<Card> {
    contentPad?: GrommetBoxTypes.PadSizes | {
      between?: GrommetBoxTypes.PadSizes;
      horizontal?: GrommetBoxTypes.PadSizes;
      vertical?: GrommetBoxTypes.PadSizes;
    };
    description?: string | React.ReactElement<any>;
    heading?: string | React.ReactElement<any>;
    headingStrong?: boolean;
    label?: string | React.ReactElement<any>;
    link?: React.ReactElement<any>;
    textSize?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    thumbnail?: string | React.ReactElement<any>;
    truncate?: boolean;
    video?: { source: string, type?: string } | React.ReactElement<any>;
  }

  export class Card extends React.Component<CardProps, any> {
    render(): JSX.Element;
  }

  interface CarouselProps {
    a11yTitle?: string;
    autoplay?: boolean;
    autoplaySpeed?: number;
    infinite?: boolean;
    persistentNav?: boolean;
  }

  export class Carousel extends React.Component<CarouselProps, any> {
    render(): JSX.Element;
  }

  interface CheckBoxProps {
    checked?: boolean;
    disabled?: boolean;
    label?: React.ReactNode;
    name?: string;
    onChange?: (event: Event) => {};
    reverse?: boolean;
    toggle?: boolean;
  }

  export class CheckBox extends React.Component<CheckBoxProps, any> {
    render(): JSX.Element;
  }

  interface ColumnsProps {
    justify?: 'start' | 'center' | 'between' | 'end';
    margin?: 'small' | 'medium' | 'large';
    masonry?: boolean;
    maxCount?: number;
    responsive?: boolean;
    size?: 'small' | 'medium' | 'large';
  }

  export class Columns extends React.Component<ColumnsProps, any> {
    render(): JSX.Element;
  }

  interface DateTimeProps {
    format?: string;
    id?: string;
    name?: string;
    onChange?: (dateTime: string) => {};
    step?: number;
    value?: string | {};
  }

  export class DateTime extends React.Component<DateTimeProps, any> {
    render(): JSX.Element;
  }

  interface DistributionProps {
    a11yTitle?: string;
    full?: boolean;
    series?: Array<{
      label?: React.ReactNode;
      value: number;
      colorIndex?: string;
      important?: boolean;
      onClick?: () => {};
      icon?: {
        width?: number;
        height?: number;
        svgElement?: React.ReactNode;
      }
    }>;
    size?: 'small' | 'medium' | 'large' | 'full';
    units?: string;
    vertical?: boolean;
  }

  export class Distribution extends React.Component<DistributionProps, any> {
    render(): JSX.Element;
  }

  interface FooterProps extends BoxProps<Footer> {
    fixed?: boolean;
    float?: boolean;
    primary?: boolean;
    size?: 'small' | 'medium' | 'large';
  }

  export class Footer extends React.Component<FooterProps, any> {
    render(): JSX.Element;
  }

  interface FormProps {
    compact?: boolean;
    fill?: boolean;
    onSubmit?: (event: Event) => {};
    pad?: GrommetCustomTypes.FormPadding | {
      horizontal?: GrommetCustomTypes.FormPadding;
      vertical?: GrommetCustomTypes.FormPadding;
    };
  }

  export class Form extends React.Component<FormProps, any> {
    render(): JSX.Element;
  }

  interface FormattedMessageProps {
    id: string;
    defaultMessage?: string;
  }

  export class FormattedMessage extends React.Component<FormattedMessageProps, any> {
    render(): JSX.Element;
  }

  interface FormFieldProps {
    error?: React.ReactNode;
    help?: React.ReactNode;
    hidden?: boolean;
    htmlFor?: string;
    label?: React.ReactNode;
    size?: 'medium' | 'large';
    strong?: boolean;
  }

  export class FormField extends React.Component<FormFieldProps, any> {
    render(): JSX.Element;
  }

  interface FormFieldsProps {
    children?: React.ReactNode;
    className?: string;
  }

  export class FormFields extends React.Component<FormFieldsProps, any> {
    render(): JSX.Element;
  }

  interface HeaderProps extends BoxProps<Header> {
    fixed?: boolean;
    float?: boolean;
    size?: 'small' | 'medium' | 'large';
    splash?: boolean;
  }

  export class Header extends React.Component<HeaderProps, any> {
    render(): JSX.Element;
  }

  interface HeadingProps {
    align?: 'start' | 'center' | 'end';
    margin?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium' | 'large';
    strong?: boolean;
    tag?: string;
    truncate?: boolean;
    uppercase?: boolean;
  }

  export class Heading extends React.Component<HeadingProps, any> {
    render(): JSX.Element;
  }

  interface HeadlineProps {
    align?: 'start' | 'center' | 'end';
    margin?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    strong?: boolean;
  }

  export class Headline extends React.Component<HeadlineProps, any> {
    render(): JSX.Element;
  }

  interface HeroProps {
    background?: React.ReactElement<any>;
    backgroundColorIndex?: string;
    size?: 'small' | 'medium' | 'large';
    // below props are all deprecated
    backgroundImage?: string;
    backgroundPosition?: 'left' | 'center' | 'right';
    backgroundVideo?: React.ReactElement<any>;
    colorIndex?: string;
    flush?: boolean;
    image?: string;
    justify?: 'start' | 'center' | 'end';
    responsiveBackgroundPosition?: 'left' | 'center' | 'right';
    separator?: boolean;
  }

  export class Hero extends React.Component<HeroProps, any> {
    render(): JSX.Element;
  }

  interface IconProps {
    a11yTitle?: string;
    colorIndex?: string;
    responsive?: boolean;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'huge';
    type?: 'control' | 'logo' | 'status';
  }

  export class Icon extends React.Component<IconProps, any> {
    render(): JSX.Element;
  }

  interface ImageProps {
    align?: {
      bottom?: boolean;
      left?: boolean;
      right?: boolean;
      top?: boolean;
    };
    alt?: string;
    caption?: boolean | string;
    fit?: 'contain' | 'cover';
    full?: 'horizontal' | 'vertical' | boolean;
    mask?: boolean;
    size?: 'small' | 'medium' | 'large' | 'thumb';
    src?: string;
    title?: string;
  }

  export class Image extends React.Component<ImageProps, any> {
    render(): JSX.Element;
  }

  interface LabelProps {
    announce?: boolean;
    labelFor?: string;
    margin?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium';
    truncate?: boolean;
    uppercase?: boolean;
  }

  export class Label extends React.Component<LabelProps, any> {
    render(): JSX.Element;
  }

  interface LayerProps {
    align?: 'center' | 'top' | 'bottom' | 'left' | 'right';
    closer?: React.ReactNode | boolean;
    flush?: boolean;
    hidden?: boolean;
    peek?: boolean;
    onClose?: () => {};
  }

  export class Layer extends React.Component<LayerProps, any> {
    context: GrommetContextTypes.All;

    render(): JSX.Element;
  }

  interface LegendProps {
    activeIndex?: number;
    announce?: boolean;
    onActive?: (index: number) => {};
    series: Array<{
      label?: string;
      value?: number | React.ReactNode;
      units?: number | React.ReactNode | { prefix?: string, suffix?: string };
      colorIndex?: number | string;
      onClick?: () => {};
    }>;
    total?: boolean | React.ReactNode;
    units?: string | {
      prefix?: string;
      suffix?: string;
    };
  }

  export class Legend extends React.Component<LegendProps, any> {
    render(): JSX.Element;
  }

  interface ListProps {
    emptyIndicator?: React.ReactNode;
    onMore?: () => {};
    onSelect?: (index: number) => {};
    selectable?: boolean | 'multiple';
    selected?: number | number[];
  }

  export class List extends React.Component<ListProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  export class ListItem extends React.Component<BoxProps<ListItem>, any> {
    render(): JSX.Element;
  }

  interface LoginFormProps {
    align?: 'start' | 'center' | 'end' | 'stretch';
    defaultValues?: {
      username?: string;
      rememberMe?: boolean;
    };
    errors?: string[];
    forgotPassword?: React.ReactNode;
    logo?: React.ReactNode;
    onSubmit?: (username: string, password: string, rememberMe: boolean) => {};
    onChange?: (event: Event, attribute?: string) => {};
    rememberMe?: boolean;
    secondaryText?: string;
    title?: string;
    usernameType?: string;
  }

  export class LoginForm extends React.Component<LoginFormProps, any> {
    render(): JSX.Element
  }

  interface MapProps {
    active?: string;
    data: {
      categories: Array<{
        id?: string;
        label?: React.ReactNode;
        items: Array<{
          id?: string;
          label?: string;
          node?: React.ReactNode;
        }>;
      }>;
      links: Array<{
        childId: string;
        colorIndex?: string;
        parentId: string;
      }>;
    };
    linkColorIndex?: string;
    onActive?: (index?: number) => {};
    vertical?: boolean;
  }

  export class Map extends React.Component<MapProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element
  }

  interface MarkdownProps {
    content?: string;
    components?: {
      props?: {};
    };
  }

  export class Markdown extends React.Component<MarkdownProps, any> {
    render(): JSX.Element;
  }

  interface MenuProps extends BoxProps<Menu> {
    closeOnClick?: boolean;
    dropAlign?: {
      top?: GrommetCustomTypes.VERTICAL_ALIGN_OPTIONS;
      bottom?: GrommetCustomTypes.VERTICAL_ALIGN_OPTIONS;
      left?: GrommetCustomTypes.HORIZONTAL_ALIGN_OPTIONS;
      right?: GrommetCustomTypes.HORIZONTAL_ALIGN_OPTIONS;
    };
    dropColorIndex?: string;
    icon?: React.ReactNode;
    id?: string;
    inline?: boolean | 'expand';
    fill?: boolean;
    label?: string;
    size?: 'small' | 'medium' | 'large';
  }

  export class Menu extends React.Component<MenuProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface MeterProps {
    active?: boolean;
    activeIndex?: number;
    a11yTitle?: string;
    colorIndex?: string;
    label?: React.ReactNode;
    max?: number;
    min?: number;
    onActive?: (index: number) => {};
    series?: Array<{
      colorIndex?: string;
      onClick?: () => {};
      label?: string;
      value: number;
    }>;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    stacked?: boolean;
    tabIndex?: string;
    threshold?: number;
    thresholds?: Array<{
      value: number;
      colorIndex?: string;
    }>;
    type?: 'bar' | 'arc' | 'circle' | 'spiral';
    value?: number;
    vertical?: boolean;
    responsive?: boolean;
  }

  export class Meter extends React.Component<MeterProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface NotificationProps extends BoxProps<Notification> {
    closer?: React.ReactNode | boolean;
    context?: React.ReactNode;
    message: string;
    onClose?: (event: Event) => {};
    percentComplete?: number;
    size?: 'small' | 'medium' | 'large' | BoxProps<Notification>["size"];
    state?: string;
    status?: string;
    timestamp?: {};
  }

  export class Notification extends React.Component<NotificationProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface NumberInputProps {
    defaultValue?: number;
    disabled?: boolean;
    id?: string;
    max?: number;
    min?: number;
    name?: string;
    onChange?: (event: Event) => {};
    step?: number;
    value?: number | string;
  }

  export class NumberInput extends React.Component<NumberInputProps, any> {
    render(): JSX.Element
  }

  interface ObjectProps {
    data: {};
  }

  export class Object extends React.Component<ObjectProps, any> {
    render(): JSX.Element
  }

  interface ParagraphProps {
    align?: 'start' | 'center' | 'end';
    margin?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    width?: 'small' | 'medium' | 'large';
  }

  export class Paragraph extends React.Component<ParagraphProps, any> {
    render(): JSX.Element
  }

  interface QuoteProps extends BoxProps<Quote> {
    borderColorIndex?: string;
    size?: 'small' | 'medium' | 'large' | 'full';
    credit?: string | React.ReactElement<any>;
    emphasizeCredit?: boolean;
  }

  export class Quote extends React.Component<QuoteProps, any> {
    render(): JSX.Element
  }

  interface RadioButtonProps {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    id: string;
    label: React.ReactNode;
    name?: string;
    onChange?: (event: Event) => {};
    value?: string;
  }

  export class RadioButton extends React.Component<RadioButtonProps, any> {
    render(): JSX.Element
  }

  interface SearchProps {
    align?: string;
    defaultValue?: string;
    dropAlign?: {
      top?: GrommetCustomTypes.VERTICAL_ALIGN_OPTIONS;
      bottom?: GrommetCustomTypes.VERTICAL_ALIGN_OPTIONS;
      left?: GrommetCustomTypes.HORIZONTAL_ALIGN_OPTIONS;
      right?: GrommetCustomTypes.HORIZONTAL_ALIGN_OPTIONS;
    };
    dropColorIndex?: string;
    fill?: boolean;
    iconAlign?: 'start' | 'end';
    id?: string;
    initialFocus?: boolean;
    inline?: boolean;
    onDOMChange?: (event: Event) => {};
    onSelect?: (query: GrommetCustomTypes.SearchInputResult) => {};
    pad?: 'small' | 'medium';
    placeHolder?: string;
    responsive?: boolean;
    size?: 'small' | 'medium' | 'large';
    suggestions?: Array<{
      label?: React.ReactNode;
      value?: any;
    } | string>;
    value?: string;
  }

  export class Search extends React.Component<SearchProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface SearchInputProps {
    defaultValue?: GrommetCustomTypes.SearchInputValue | string;
    id?: string;
    name?: string;
    onDOMChange?: (event: Event) => {};
    onSelect?: (query: GrommetCustomTypes.SearchInputResult) => {};
    placeHolder?: string;
    suggestions?: Array<GrommetCustomTypes.SearchInputValue | string>;
    value?: GrommetCustomTypes.SearchInputValue | string;
  }

  export class SearchInput extends React.Component<SearchInputProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  export class Section extends React.Component<BoxProps<Section>, any> {
    render(): JSX.Element
  }

  interface SelectValue {
    target: any;
    option: string;
    value: string;
  }
  interface SelectProps {
    inline?: boolean;
    multiple?: boolean;
    onSearch?: (event: Event) => {};
    onChange?: (value: SelectValue) => {};
    placeHolder?: string;
    options: GrommetCustomTypes.SelectValueType[];
    value?: GrommetCustomTypes.SelectValueType | GrommetCustomTypes.SelectValueType[];
  }

  export class Select extends React.Component<SelectProps, any> {
    render(): JSX.Element
  }

  interface SidebarProps extends BoxProps<Sidebar> {
    fixed?: boolean;
    size?: 'xsmall' | 'small' | 'medium' | 'large';
    full?: boolean;
  }

  export class Sidebar extends React.Component<SidebarProps, any> {
    render(): JSX.Element
  }

  interface SkipLinkAnchorProps {
    label: React.ReactNode;
  }

  export class SkipLinkAnchor extends React.Component<SkipLinkAnchorProps, any> {
    render(): JSX.Element
  }

  export class SkipLinks extends React.Component<any, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface SocialShareProps {
    a11yTitle?: string;
    className?: string;
    colorIndex?: string;
    link: string;
    text?: string;
    title?: string;
    type: 'email' | 'facebook' | 'twitter' | 'linkedin' | 'google';
  }

  export class SocialShare extends React.Component<SocialShareProps, any> {
    render(): JSX.Element
  }

  interface SplitProps {
    fixed?: boolean;
    flex?: 'left' | 'right' | 'both';
    onResponsive?: (size: string) => {};
    priority?: 'left' | 'right';
    separator?: boolean;
    showOnResponsive?: 'priority' | 'both';
  }

  export class Split extends React.Component<SplitProps, any> {
    render(): JSX.Element
  }

  interface SunBurstProps {
    a11yTitle?: string;
    active?: number[];
    data?: Array<{
      children?: Array<{}>;
      colorIndex?: string;
      total?: number;
      value: number;
    }>;
    label?: React.ReactNode;
    onActive?: (indexes?: number[]) => {};
    onClick?: (index: number) => {};
    size?: 'small' | 'medium' | 'large' | 'xlarge' | 'full';
  }

  export class SunBurst extends React.Component<SunBurstProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface SVGIconProps {
    a11yTitle?: string;
    colorIndex?: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge' | 'huge';
    type?: 'control' | 'logo' | 'status';
  }

  export class SVGIcon extends React.Component<SVGIconProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface TabProps<T> {
    title: string;
    active?: boolean;
    id?: string;
    onActive?: (index: number) => {};
    onRequestForActive?: <T>() => React.ReactElement<T>;
  }

  export class Tab extends React.Component<TabProps<Tab>, any> {
    render(): JSX.Element
  }

  interface TableProps {
    a11yTitle?: string;
    onMore?: () => {};
    onSelect?: (indexes?: number | number[]) => {};
    scrollable?: boolean;
    selectable?: boolean | 'multiple';
    selected?: number | number[];
  }

  export class Table extends React.Component<TableProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface TableHeaderProps {
    labels: React.ReactNode[];
    onSort?: (index: number, nextIsAscending: boolean) => {};
    sortAscending?: boolean;
    sortIndex?: number;
  }

  export class TableHeader extends React.Component<TableHeaderProps, any> {
    render(): JSX.Element
  }

  interface TableRowProps {
    onClick?: (event: Event) => {};
  }

  export class TableRow extends React.Component<TableRowProps, any> {
    render(): JSX.Element;
  }

  interface TabsProps {
    activeIndex?: number;
    justify?: 'start' | 'center' | 'end';
    responsive?: boolean;
    onActive?: (index: number) => {};
  }

  export class Tabs extends React.Component<TabsProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface TextInputProps {
    defaultValue?: string;
    id?: string;
    name?: string;
    onDOMChange?: (event: Event) => {};
    onSelect?: (query: GrommetCustomTypes.SearchInputResult) => {};
    placeHolder?: string;
    suggestions?: Array<string | { label?: React.ReactNode; value?: any }>;
    value?: string;
  }

  export class TextInput extends React.Component<TextInputProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface TileProps extends BoxProps<Tile> {
    hoverStyle?: 'border' | 'background' | 'none';
    hoverColorIndex?: string;
    hoverBorder?: boolean;
    hoverBorderSize?: 'small' | 'medium' | 'large';
    wide?: boolean;
  }

  export class Tile extends React.Component<TileProps, any> {
    render(): JSX.Element;
  }

  interface TilesProps extends BoxProps<Tiles> {
    fill?: boolean;
    flush?: boolean;
    onMore?: () => {};
    onSelect?: (indexes: number | number[]) => {};
    selectable?: boolean | 'multiple';
    selected?: number | number[];
  }

  export class Tiles extends React.Component<TilesProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface TimestampProps {
    align?: 'start' | 'center' | 'end';
    fields?: GrommetCustomTypes.TIME_STAMP_FIELD_TYPES[] | GrommetCustomTypes.TIME_STAMP_FIELD_TYPES;
    value: string | {};
  }

  export class Timestamp extends React.Component<TimestampProps, any> {
    render(): JSX.Element;
  }

  interface TipProps {
    colorIndex?: string;
    onClose: (event: Event) => {};
    target: string;
  }

  export class Tip extends React.Component<TipProps, any> {
    render(): JSX.Element;
  }

  interface TitleProps {
    a11yTitle?: string;
    onClick?: () => {};
    responsive?: boolean;
    truncate?: boolean;
  }

  export class Title extends React.Component<TitleProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface ToastProps {
    onClose?: () => {};
    status?: string;
  }

  export class Toast extends React.Component<ToastProps, any> {
    render(): JSX.Element;
  }

  interface TopologyProps {
    a11yTitle?: string;
    links?: Array<{ colorIndex?: string; ids: string[] }>;
    linkOffset?: number;
  }

  export class Topology extends React.Component<TopologyProps, any> {
    context: GrommetContextTypes.Intl;

    render(): JSX.Element;
  }

  interface ValueProps {
    active?: boolean;
    align?: 'start' | 'center' | 'end';
    announce?: boolean;
    colorIndex?: string;
    icon?: React.ReactNode;
    label?: string | React.ReactNode;
    onClick?: () => {};
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    trendIcon?: React.ReactNode;
    value?: React.ReactNode | number | string;
    units?: React.ReactNode | string;
  }

  export class Value extends React.Component<ValueProps, any> {
    render(): JSX.Element;
  }

  interface VideoProps {
    align?: {
      bottom?: boolean;
      left?: boolean;
      right?: boolean;
      top?: boolean;
    };
    allowFullScreen?: boolean;
    autoPlay?: boolean;
    colorIndex?: string;
    fit?: 'contain' | 'cover';
    full?: boolean | 'horizontal' | 'vertical';
    loop?: boolean;
    muted?: boolean;
    poster?: string;
    shareLink?: string;
    shareHeadline?: string;
    shareText?: string;
    showControls?: boolean;
    size?: 'small' | 'medium' | 'large';
    timeline?: Array<{
      label?: string;
      time?: number;
    }>;
    title?: React.ReactNode;
  }

  export class Video extends React.Component<VideoProps, any> {
    render(): JSX.Element;
  }

  interface WorldMapProps {
    series?: Array<{
      continent?: 'NorthAmerica' | 'SouthAmerica' | 'Europe' | 'Africa' | 'Asia' | 'Australia';
      colorIndex?: string;
      onClick?: () => {};
    }>;
  }

  export class WorldMap extends React.Component<WorldMapProps, any> {
    render(): JSX.Element;
  }
}

// Internal grommet types
declare namespace GrommetBoxTypes {
  type FixedSizes = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  type MarginSizes = 'small' | 'medium' | 'large' | 'none';
  type BoxSizes =
    'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge'
    | 'full'
    | '1/2'
    | '1/3'
    | '2/3'
    | '1/4'
    | '3/4';
  type PadSizes = 'small' | 'medium' | 'large' | 'none';
  type Size = 'auto' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'full';

  interface ObjectSizes {
    height?: Size | {
      max?: FixedSizes;
      min?: FixedSizes;
    };
    width?: Size | {
      max?: FixedSizes;
      min?: FixedSizes;
    };
  }
}

declare namespace GrommetContextTypes {
  interface Intl {
    intl?: {};
  }

  interface All {
    router?: any;
    history?: {};
    intl?: {};
    store?: {};
  }
}

declare namespace GrommetCustomTypes {
  type SelectValueType = { label?: string; value?: any; } | string | number;

  interface SearchInputValue {
    label?: string;
    value?: string;
  }

  interface SearchInputResult {
    target: any;
    suggestion?: string;
  }

  type VERTICAL_ALIGN_OPTIONS = 'top' | 'bottom';
  type HORIZONTAL_ALIGN_OPTIONS = 'right' | 'left';
  type FormPadding = 'none' | 'small' | 'medium' | 'large';
  type AnimationType = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'jiggle';

  interface AnimationDetails {
    animation: AnimationType;
    duration?: number;
    delay?: number;
  }

  type TIME_STAMP_FIELD_TYPES =
    'date'
    | 'time'
    | 'year'
    | 'month'
    | 'day'
    | 'hour'
    | 'minute'
    | 'second'
    | 'hours'
    | 'minutes'
    | 'seconds';
}