/**
 * TODO: Refactor this document, right now there is quite some redundancy
 * caused by the janky way buildings are filtered.
 */

import ar from '../icons/buildings/ar.png'
import barracks from '../icons/buildings/barracks.png'
import blacksmith from '../icons/buildings/blacksmith.png'
import dock from '../icons/buildings/dock.png'
import farm from '../icons/buildings/farm.png'
import ger from '../icons/buildings/ger.png'
import granary from '../icons/buildings/granary.png'
import house from '../icons/buildings/house.png'
import how from '../icons/buildings/how.png'
import hc from '../icons/buildings/hunting-cabin.png'
import keep from '../icons/buildings/keep.png'
import lc from '../icons/buildings/lc.png'
import market from '../icons/buildings/market.png'
import mc from '../icons/buildings/mc.png'
import mill from '../icons/buildings/mill.png'
import monastery from '../icons/buildings/monastery.png'
import mosque from '../icons/buildings/mosque.png'
import outpost from '../icons/buildings/outpost.png'
import ovoo from '../icons/buildings/ovoo.png'
import ovooGoldenHorde from '../icons/buildings/ovoo-golden-horde.png'
import pagoda from '../icons/buildings/pagoda.png'
import palisadeGate from '../icons/buildings/palisade-gate.png'
import palisade from '../icons/buildings/palisade.png'
import pasture from '../icons/buildings/pasture.png'
import siege from '../icons/buildings/siege.png'
import stable from '../icons/buildings/stable.png'
import stoneGate from '../icons/buildings/stone-gate.png'
import tc from '../icons/buildings/tc.png'
import tower from '../icons/buildings/tower.png'
import university from '../icons/buildings/university.png'
import village from '../icons/buildings/village.png'
import wall from '../icons/buildings/wall.png'
import woodenFortress from '../icons/buildings/wooden-fortress.png'
import pitMine from '../icons/buildings/pit.png'
import tollOutpost from '../icons/buildings/toll-outpost.png'
import cattleRanch from '../icons/buildings/cattle-ranch.png'
import militarySchool from '../icons/buildings/military-school.png'
import farmhouse from '../icons/buildings/farmhouse.png'
import forge from '../icons/buildings/forge.png'
import shintoShrine from '../icons/buildings/shinto-shrine.png'
import oliveGrove from '../icons/buildings/olive-grove.png'
import cistern from '../icons/buildings/cistern.png'
import aqueduct from '../icons/buildings/aqueduct.png'
import mercenaryHouse from '../icons/buildings/mercenary-house.png'
import buddhistTemple from '../icons/buildings/buddhist-temple.png'
import fortifiedOutpost from '../icons/buildings/fortified-outpost.png'
import goldenTent from '../icons/buildings/golden-tent.png'
import grassland from '../icons/buildings/grassland.png'
import hojoEstate from '../icons/buildings/hojo-clan-daimyo-estate.png'
import machineWorkshop from '../icons/buildings/machine-workshop.png'
import madrasa from '../icons/buildings/madrasa.png'
import manor from '../icons/buildings/manor.png'
import matsuri from '../icons/buildings/matsuri.png'
import odaEstate from '../icons/buildings/oda-clan-daimyo-estate.png'
import prayerTent from '../icons/buildings/prayer-tent.png'
import stockyard from '../icons/buildings/stockyard.png'
import takedaEstate from '../icons/buildings/takeda-clan-daimyo-estate.png'
import tughlaqabadFort from '../icons/buildings/tughlaqabad-fort.png'
import templarKeep from '../icons/buildings/templar-keep.png'
import varangianArsenal from '../icons/buildings/varangian-arsenal.png'
import varangianStronghold from '../icons/buildings/varangian-stronghold.png'
import varangianWarcamp from '../icons/buildings/varangian-warcamp.png'
import warStable from '../icons/buildings/war-stable.png'
import workerElephant from '../icons/buildings/worker-elephant.png'

const buildings = [
	// Age I
	{
		name: 'House',
		shortcut: ['0:0', '0:0'],
		icon: house,
		type: 'economic',
		age: 'I',
		group: 'GENERIC'
	},
	{
		name: 'Mill',
		shortcut: ['0:0', '0:1'],
		icon: mill,
		type: 'economic',
		age: 'I',
		group: 'GENERIC'
	},
	{
		name: 'Lumber Camp',
		shortcut: ['0:0', '0:2'],
		icon: lc,
		type: 'economic',
		age: 'I',
		group: 'GENERIC'
	},
	{
		name: 'Mining Camp',
		shortcut: ['0:0', '0:3'],
		icon: mc,
		type: 'economic',
		age: 'I',
		group: 'GENERIC'
	},
	{
		name: 'Farm',
		shortcut: ['0:0', '1:0'],
		icon: farm,
		type: 'economic',
		age: 'I',
		group: 'GENERIC'
	},
	{
		name: 'Barracks',
		shortcut: ['0:0', '1:1'],
		icon: barracks,
		type: 'military',
		age: 'I',
		group: 'COMMON'
	},
	{
		name: 'Dock',
		shortcut: ['0:0', '1:2'],
		icon: dock,
		type: 'economic',
		age: 'I',
		group: 'COMMON'
	},
	{
		name: 'Outpost',
		shortcut: ['0:0', '2:0'],
		icon: outpost,
		type: 'fortified',
		age: 'I',
		group: 'GENERIC'
	},
	{
		name: 'Palisade Wall',
		shortcut: ['0:0', '2:1'],
		icon: palisade,
		type: 'fortified',
		age: 'I',
		group: 'GENERIC'
	},
	{
		name: 'Palisade Gate',
		shortcut: ['0:0', '2:2'],
		icon: palisadeGate,
		type: 'fortified',
		age: 'I',
		group: 'GENERIC'
	},
	// Age II
	{
		name: 'Blacksmith',
		shortcut: ['0:1', '0:0'],
		icon: blacksmith,
		type: 'research',
		age: 'II',
		group: 'COMMON'
	},
	{
		name: 'Market',
		shortcut: ['0:1', '0:1'],
		icon: market,
		type: 'economic',
		age: 'II',
		group: 'COMMON'
	},
	{
		name: 'Town Center',
		shortcut: ['0:1', '0:2'],
		icon: tc,
		type: 'economic',
		age: 'II',
		group: 'COMMON'
	},
	{
		name: 'Archery Range',
		shortcut: ['0:1', '1:0'],
		icon: ar,
		type: 'military',
		age: 'II',
		group: 'COMMON'
	},
	{
		name: 'Stable',
		shortcut: ['0:1', '1:1'],
		icon: stable,
		type: 'military',
		age: 'II',
		group: 'GENERIC'
	},
	{
		name: 'Stone Tower',
		shortcut: ['0:1', '2:0'],
		icon: tower,
		type: 'fortified',
		age: 'II',
		group: 'GENERIC'
	},
	{
		name: 'Stone Wall',
		shortcut: ['0:1', '2:1'],
		icon: wall,
		type: 'fortified',
		age: 'II',
		group: 'GENERIC'
	},
	{
		name: 'Stone Gate',
		shortcut: ['0:1', '2:2'],
		icon: stoneGate,
		type: 'fortified',
		age: 'II',
		group: 'GENERIC'
	},
	// Age III
	{
		name: 'Monastery',
		shortcut: ['0:2', '0:0'],
		icon: monastery,
		type: 'research',
		age: 'III',
		group: 'GENERIC'
	},
	{
		name: 'Siege Workshop',
		shortcut: ['0:2', '1:0'],
		icon: siege,
		type: 'military',
		age: 'III',
		group: 'COMMON'
	},
	{
		name: 'Keep',
		shortcut: ['0:2', '2:0'],
		icon: keep,
		type: 'fortified',
		age: 'III',
		group: 'GENERIC'
	},
	// Age IV
	{
		name: 'University',
		shortcut: ['0:3', '0:0'],
		icon: university,
		type: 'research',
		age: 'IV',
		group: 'GENERIC'
	},
	/**
	 * Mongol-specific
	 */
	{
		name: 'Ovoo',
		shortcut: ['0:0', '0:0'],
		icon: ovoo,
		type: 'economic',
		age: 'I',
		group: 'MONGOL'
	},
	{
		name: 'Ger',
		shortcut: ['0:0', '0:1'],
		icon: ger,
		type: 'economic',
		age: 'I',
		group: 'MONGOL'
	},
	{
		name: 'Pasture',
		shortcut: ['0:0', '1:0'],
		icon: pasture,
		type: 'economic',
		age: 'I',
		group: 'MONGOL'
	},
	{
		name: 'Outpost',
		shortcut: ['0:0', '2:0'],
		icon: outpost,
		type: 'fortified',
		age: 'I',
		group: 'MONGOL'
	},
	// Stable in Age I
	{
		name: 'Stable',
		shortcut: ['0:0', '1:3'],
		icon: stable,
		type: 'military',
		age: 'I',
		group: 'MONGOL'
	},
	{
		name: 'Monastery',
		shortcut: ['0:2', '0:0'],
		icon: monastery,
		type: 'research',
		age: 'III',
		group: 'MONGOL'
	},
	/**
	 * Rus-specific
	 */
	{
		name: 'House',
		shortcut: ['0:0', '0:0'],
		icon: house,
		type: 'economic',
		age: 'I',
		group: 'RUS'
	},
	{
		name: 'Hunting Cabin',
		shortcut: ['0:0', '0:1'],
		icon: hc,
		type: 'economic',
		age: 'I',
		group: 'RUS'
	},
	{
		name: 'Lumber Camp',
		shortcut: ['0:0', '0:2'],
		icon: lc,
		type: 'economic',
		age: 'I',
		group: 'RUS'
	},
	{
		name: 'Mining Camp',
		shortcut: ['0:0', '0:3'],
		icon: mc,
		type: 'economic',
		age: 'I',
		group: 'RUS'
	},
	{
		name: 'Farm',
		shortcut: ['0:0', '1:0'],
		icon: farm,
		type: 'economic',
		age: 'I',
		group: 'RUS'
	},
	{
		name: 'Fortress',
		shortcut: ['0:0', '2:0'],
		icon: woodenFortress,
		type: 'fortified',
		age: 'I',
		group: 'RUS'
	},
	{
		name: 'Palisade Wall',
		shortcut: ['0:0', '2:1'],
		icon: palisade,
		type: 'fortified',
		age: 'I',
		group: 'RUS'
	},
	{
		name: 'Palisade Gate',
		shortcut: ['0:0', '2:2'],
		icon: palisadeGate,
		type: 'fortified',
		age: 'I',
		group: 'RUS'
	},
	{
		name: 'Stable',
		shortcut: ['0:1', '1:1'],
		icon: stable,
		type: 'military',
		age: 'II',
		group: 'RUS'
	},
	{
		name: 'Monastery',
		shortcut: ['0:2', '0:0'],
		icon: monastery,
		type: 'research',
		age: 'III',
		group: 'RUS'
	},
	{
		name: 'Stone Tower',
		shortcut: ['0:1', '2:0'],
		icon: tower,
		type: 'fortified',
		age: 'II',
		group: 'RUS'
	},
	{
		name: 'Stone Wall',
		shortcut: ['0:1', '2:1'],
		icon: wall,
		type: 'fortified',
		age: 'II',
		group: 'RUS'
	},
	{
		name: 'Stone Gate',
		shortcut: ['0:1', '2:2'],
		icon: stoneGate,
		type: 'fortified',
		age: 'II',
		group: 'RUS'
	},
	{
		name: 'Keep',
		shortcut: ['0:2', '2:0'],
		icon: keep,
		type: 'fortified',
		age: 'III',
		group: 'RUS'
	},
	{
		name: 'University',
		shortcut: ['0:3', '0:0'],
		icon: university,
		type: 'research',
		age: 'IV',
		group: 'RUS'
	},
	/**
	 * Chinese-specific
	 */
	{
		name: 'House',
		shortcut: ['0:0', '0:0'],
		icon: house,
		type: 'economic',
		age: 'I',
		group: 'CHINESE'
	},
	{
		name: 'Mill',
		shortcut: ['0:0', '0:1'],
		icon: mill,
		type: 'economic',
		age: 'I',
		group: 'CHINESE'
	},
	{
		name: 'Lumber Camp',
		shortcut: ['0:0', '0:2'],
		icon: lc,
		type: 'economic',
		age: 'I',
		group: 'CHINESE'
	},
	{
		name: 'Mining Camp',
		shortcut: ['0:0', '0:3'],
		icon: mc,
		type: 'economic',
		age: 'I',
		group: 'CHINESE'
	},
	{
		name: 'Farm',
		shortcut: ['0:0', '1:0'],
		icon: farm,
		type: 'economic',
		age: 'I',
		group: 'CHINESE'
	},
	{
		name: 'Outpost',
		shortcut: ['0:0', '2:0'],
		icon: outpost,
		type: 'fortified',
		age: 'I',
		group: 'CHINESE'
	},
	{
		name: 'Palisade Wall',
		shortcut: ['0:0', '2:1'],
		icon: palisade,
		type: 'fortified',
		age: 'I',
		group: 'CHINESE'
	},
	{
		name: 'Palisade Gate',
		shortcut: ['0:0', '2:2'],
		icon: palisadeGate,
		type: 'fortified',
		age: 'I',
		group: 'CHINESE'
	},
	{
		name: 'Stable',
		shortcut: ['0:1', '1:1'],
		icon: stable,
		type: 'military',
		age: 'II',
		group: 'CHINESE'
	},
	{
		name: 'Village',
		shortcut: ['0:0', '1:3'],
		icon: village,
		type: 'economic',
		age: 'I',
		group: 'CHINESE'
	},
	{
		name: 'Stone Tower',
		shortcut: ['0:1', '2:0'],
		icon: tower,
		type: 'fortified',
		age: 'II',
		group: 'CHINESE'
	},
	{
		name: 'Stone Wall',
		shortcut: ['0:1', '2:1'],
		icon: wall,
		type: 'fortified',
		age: 'II',
		group: 'CHINESE'
	},
	{
		name: 'Stone Gate',
		shortcut: ['0:1', '2:2'],
		icon: stoneGate,
		type: 'fortified',
		age: 'II',
		group: 'CHINESE'
	},
	{
		name: 'Monastery',
		shortcut: ['0:2', '0:0'],
		icon: monastery,
		type: 'research',
		age: 'III',
		group: 'CHINESE'
	},
	{
		name: 'Granary',
		shortcut: ['0:1', '1:2'],
		icon: granary,
		type: 'economic',
		age: 'II',
		group: 'CHINESE'
	},
	{
		name: 'Keep',
		shortcut: ['0:2', '2:0'],
		icon: keep,
		type: 'fortified',
		age: 'III',
		group: 'CHINESE'
	},
	{
		name: 'University',
		shortcut: ['0:3', '0:0'],
		icon: university,
		type: 'research',
		age: 'IV',
		group: 'CHINESE'
	},
	{
		name: 'Pagoda',
		shortcut: ['0:2', '1:1'],
		icon: pagoda,
		type: 'economic',
		age: 'III',
		group: 'CHINESE'
	},
	/**
	 * Abbasid-specific
	 */
	{
		name: 'House',
		shortcut: ['0:0', '0:0'],
		icon: house,
		type: 'economic',
		age: 'I',
		group: 'ABBASID'
	},
	{
		name: 'Mill',
		shortcut: ['0:0', '0:1'],
		icon: mill,
		type: 'economic',
		age: 'I',
		group: 'ABBASID'
	},
	{
		name: 'Lumber Camp',
		shortcut: ['0:0', '0:2'],
		icon: lc,
		type: 'economic',
		age: 'I',
		group: 'ABBASID'
	},
	{
		name: 'Mining Camp',
		shortcut: ['0:0', '0:3'],
		icon: mc,
		type: 'economic',
		age: 'I',
		group: 'ABBASID'
	},
	{
		name: 'Farm',
		shortcut: ['0:0', '1:0'],
		icon: farm,
		type: 'economic',
		age: 'I',
		group: 'ABBASID'
	},
	{
		name: 'House of Wisdom',
		shortcut: ['0:0', '1:3'],
		icon: how,
		type: 'economic',
		age: 'I',
		group: 'ABBASID'
	},
	{
		name: 'Outpost',
		shortcut: ['0:0', '2:0'],
		icon: outpost,
		type: 'fortified',
		age: 'I',
		group: 'ABBASID'
	},
	{
		name: 'Palisade Wall',
		shortcut: ['0:0', '2:1'],
		icon: palisade,
		type: 'fortified',
		age: 'I',
		group: 'ABBASID'
	},
	{
		name: 'Palisade Gate',
		shortcut: ['0:0', '2:2'],
		icon: palisadeGate,
		type: 'fortified',
		age: 'I',
		group: 'ABBASID'
	},
	{
		name: 'Stable',
		shortcut: ['0:1', '1:1'],
		icon: stable,
		type: 'military',
		age: 'II',
		group: 'ABBASID'
	},
	{
		name: 'Stone Tower',
		shortcut: ['0:1', '2:0'],
		icon: tower,
		type: 'fortified',
		age: 'II',
		group: 'ABBASID'
	},
	{
		name: 'Stone Wall',
		shortcut: ['0:1', '2:1'],
		icon: wall,
		type: 'fortified',
		age: 'II',
		group: 'ABBASID'
	},
	{
		name: 'Stone Gate',
		shortcut: ['0:1', '2:2'],
		icon: stoneGate,
		type: 'fortified',
		age: 'II',
		group: 'ABBASID'
	},
	{
		name: 'Prayer Tent',
		shortcut: ['0:2', '0:0'],
		icon: mosque,
		type: 'economic',
		age: 'III',
		group: 'ABBASID'
	},
	{
		name: 'Keep',
		shortcut: ['0:2', '2:0'],
		icon: keep,
		type: 'fortified',
		age: 'III',
		group: 'ABBASID'
	},
	{
		name: 'University',
		shortcut: ['0:3', '0:0'],
		icon: university,
		type: 'research',
		age: 'IV',
		group: 'ABBASID'
	},
	/**
	 * Delhi-specific
	 */
	{
		name: 'House',
		shortcut: ['0:0', '0:0'],
		icon: house,
		type: 'economic',
		age: 'I',
		group: 'DELHI'
	},
	{
		name: 'Mill',
		shortcut: ['0:0', '0:1'],
		icon: mill,
		type: 'economic',
		age: 'I',
		group: 'DELHI'
	},
	{
		name: 'Lumber Camp',
		shortcut: ['0:0', '0:2'],
		icon: lc,
		type: 'economic',
		age: 'I',
		group: 'DELHI'
	},
	{
		name: 'Mining Camp',
		shortcut: ['0:0', '0:3'],
		icon: mc,
		type: 'economic',
		age: 'I',
		group: 'DELHI'
	},
	{
		name: 'Farm',
		shortcut: ['0:0', '1:0'],
		icon: farm,
		type: 'economic',
		age: 'I',
		group: 'DELHI'
	},
	{
		name: 'Mosque',
		shortcut: ['0:0', '1:3'],
		icon: mosque,
		type: 'economic',
		age: 'I',
		group: 'DELHI'
	},
	{
		name: 'Outpost',
		shortcut: ['0:0', '2:0'],
		icon: outpost,
		type: 'fortified',
		age: 'I',
		group: 'DELHI'
	},
	{
		name: 'Palisade Wall',
		shortcut: ['0:0', '2:1'],
		icon: palisade,
		type: 'fortified',
		age: 'I',
		group: 'DELHI'
	},
	{
		name: 'Palisade Gate',
		shortcut: ['0:0', '2:2'],
		icon: palisadeGate,
		type: 'fortified',
		age: 'I',
		group: 'DELHI'
	},
	{
		name: 'Stable',
		shortcut: ['0:1', '1:1'],
		icon: stable,
		type: 'military',
		age: 'II',
		group: 'DELHI'
	},
	{
		name: 'Stone Tower',
		shortcut: ['0:1', '2:0'],
		icon: tower,
		type: 'fortified',
		age: 'II',
		group: 'DELHI'
	},
	{
		name: 'Stone Wall',
		shortcut: ['0:1', '2:1'],
		icon: wall,
		type: 'fortified',
		age: 'II',
		group: 'DELHI'
	},
	{
		name: 'Stone Gate',
		shortcut: ['0:1', '2:2'],
		icon: stoneGate,
		type: 'fortified',
		age: 'II',
		group: 'DELHI'
	},
	{
		name: 'Keep',
		shortcut: ['0:2', '2:0'],
		icon: keep,
		type: 'fortified',
		age: 'III',
		group: 'DELHI'
	},
	{
		name: 'University',
		shortcut: ['0:3', '0:0'],
		icon: university,
		type: 'research',
		age: 'IV',
		group: 'DELHI'
	},
	/**
	 * Malian-specific
	 */
	{
		name: 'House',
		shortcut: ['0:0', '0:0'],
		icon: house,
		type: 'economic',
		age: 'I',
		group: 'MALIANS'
	},
	{
		name: 'Mill',
		shortcut: ['0:0', '0:1'],
		icon: mill,
		type: 'economic',
		age: 'I',
		group: 'MALIANS'
	},
	{
		name: 'Lumber Camp',
		shortcut: ['0:0', '0:2'],
		icon: lc,
		type: 'economic',
		age: 'I',
		group: 'MALIANS'
	},
	{
		name: 'Mining Camp',
		shortcut: ['0:0', '0:3'],
		icon: mc,
		type: 'economic',
		age: 'I',
		group: 'MALIANS'
	},
	{
		name: 'Farm',
		shortcut: ['0:0', '1:0'],
		icon: farm,
		type: 'economic',
		age: 'I',
		group: 'MALIANS'
	},
	{
		name: 'Pit Mine',
		shortcut: ['0:0', '1:3'],
		icon: pitMine,
		type: 'economic',
		age: 'I',
		group: 'MALIANS'
	},
	{
		name: 'Toll Outpost',
		shortcut: ['0:0', '2:0'],
		icon: tollOutpost,
		type: 'fortified',
		age: 'I',
		group: 'MALIANS'
	},
	{
		name: 'Palisade Wall',
		shortcut: ['0:0', '2:1'],
		icon: palisade,
		type: 'fortified',
		age: 'I',
		group: 'MALIANS'
	},
	{
		name: 'Palisade Gate',
		shortcut: ['0:0', '2:2'],
		icon: palisadeGate,
		type: 'fortified',
		age: 'I',
		group: 'MALIANS'
	},
	{
		name: 'Stable',
		shortcut: ['0:1', '1:1'],
		icon: stable,
		type: 'military',
		age: 'II',
		group: 'MALIANS'
	},
	{
		name: 'Cattle Ranch',
		shortcut: ['0:1', '1:2'],
		icon: cattleRanch,
		type: 'economic',
		age: 'II',
		group: 'MALIANS'
	},
	{
		name: 'Stone Tower',
		shortcut: ['0:1', '2:0'],
		icon: tower,
		type: 'fortified',
		age: 'II',
		group: 'MALIANS'
	},
	{
		name: 'Stone Wall',
		shortcut: ['0:1', '2:1'],
		icon: wall,
		type: 'fortified',
		age: 'II',
		group: 'MALIANS'
	},
	{
		name: 'Stone Gate',
		shortcut: ['0:1', '2:2'],
		icon: stoneGate,
		type: 'fortified',
		age: 'II',
		group: 'MALIANS'
	},
	{
		name: 'Mosque',
		shortcut: ['0:2', '0:0'],
		icon: mosque,
		type: 'economic',
		age: 'III',
		group: 'MALIANS'
	},
	{
		name: 'Keep',
		shortcut: ['0:2', '2:0'],
		icon: keep,
		type: 'fortified',
		age: 'III',
		group: 'MALIANS'
	},
	{
		name: 'University',
		shortcut: ['0:3', '0:0'],
		icon: university,
		type: 'research',
		age: 'IV',
		group: 'MALIANS'
	},
	/**
	 * Ottoman-specific
	 */
	{
		name: 'House',
		shortcut: ['0:0', '0:0'],
		icon: house,
		type: 'economic',
		age: 'I',
		group: 'OTTOMANS'
	},
	{
		name: 'Mill',
		shortcut: ['0:0', '0:1'],
		icon: mill,
		type: 'economic',
		age: 'I',
		group: 'OTTOMANS'
	},
	{
		name: 'Lumber Camp',
		shortcut: ['0:0', '0:2'],
		icon: lc,
		type: 'economic',
		age: 'I',
		group: 'OTTOMANS'
	},
	{
		name: 'Mining Camp',
		shortcut: ['0:0', '0:3'],
		icon: mc,
		type: 'economic',
		age: 'I',
		group: 'OTTOMANS'
	},
	{
		name: 'Farm',
		shortcut: ['0:0', '1:0'],
		icon: farm,
		type: 'economic',
		age: 'I',
		group: 'OTTOMANS'
	},
	{
		name: 'Military School',
		shortcut: ['0:0', '1:3'],
		icon: militarySchool,
		type: 'military',
		age: 'I',
		group: 'OTTOMANS'
	},
	{
		name: 'Outpost',
		shortcut: ['0:0', '2:0'],
		icon: outpost,
		type: 'fortified',
		age: 'I',
		group: 'OTTOMANS'
	},
	{
		name: 'Palisade Wall',
		shortcut: ['0:0', '2:1'],
		icon: palisade,
		type: 'fortified',
		age: 'I',
		group: 'OTTOMANS'
	},
	{
		name: 'Palisade Gate',
		shortcut: ['0:0', '2:2'],
		icon: palisadeGate,
		type: 'fortified',
		age: 'I',
		group: 'OTTOMANS'
	},
	{
		name: 'Stable',
		shortcut: ['0:1', '1:1'],
		icon: stable,
		type: 'military',
		age: 'II',
		group: 'OTTOMANS'
	},
	{
		name: 'Stone Tower',
		shortcut: ['0:1', '2:0'],
		icon: tower,
		type: 'fortified',
		age: 'II',
		group: 'OTTOMANS'
	},
	{
		name: 'Stone Wall',
		shortcut: ['0:1', '2:1'],
		icon: wall,
		type: 'fortified',
		age: 'II',
		group: 'OTTOMANS'
	},
	{
		name: 'Stone Gate',
		shortcut: ['0:1', '2:2'],
		icon: stoneGate,
		type: 'fortified',
		age: 'II',
		group: 'OTTOMANS'
	},
	{
		name: 'Mosque',
		shortcut: ['0:2', '0:0'],
		icon: mosque,
		type: 'economic',
		age: 'III',
		group: 'OTTOMANS'
	},
	{
		name: 'Keep',
		shortcut: ['0:2', '2:0'],
		icon: keep,
		type: 'fortified',
		age: 'III',
		group: 'OTTOMANS'
	},
	{
		name: 'University',
		shortcut: ['0:3', '0:0'],
		icon: university,
		type: 'research',
		age: 'IV',
		group: 'OTTOMANS'
	},
	/**
	 * Japanese-specific
	 */
	{
		name: 'Farmhouse',
		shortcut: ['0:0', '0:0'],
		icon: farmhouse,
		type: 'economic',
		age: 'I',
		group: 'JAPANESE'
	},
	{
		name: 'Lumber Camp',
		shortcut: ['0:0', '0:2'],
		icon: lc,
		type: 'economic',
		age: 'I',
		group: 'JAPANESE'
	},
	{
		name: 'Forge',
		shortcut: ['0:0', '0:3'],
		icon: forge,
		type: 'economic',
		age: 'I',
		group: 'JAPANESE'
	},
	{
		name: 'Farm',
		shortcut: ['0:0', '1:0'],
		icon: farm,
		type: 'economic',
		age: 'I',
		group: 'JAPANESE'
	},
	{
		name: 'Outpost',
		shortcut: ['0:0', '2:0'],
		icon: outpost,
		type: 'fortified',
		age: 'I',
		group: 'JAPANESE'
	},
	{
		name: 'Palisade Wall',
		shortcut: ['0:0', '2:1'],
		icon: palisade,
		type: 'fortified',
		age: 'I',
		group: 'JAPANESE'
	},
	{
		name: 'Palisade Gate',
		shortcut: ['0:0', '2:2'],
		icon: palisadeGate,
		type: 'fortified',
		age: 'I',
		group: 'JAPANESE'
	},
	{
		name: 'Stable',
		shortcut: ['0:1', '1:1'],
		icon: stable,
		type: 'military',
		age: 'II',
		group: 'JAPANESE'
	},
	{
		name: 'Stone Tower',
		shortcut: ['0:1', '2:0'],
		icon: tower,
		type: 'fortified',
		age: 'II',
		group: 'JAPANESE'
	},
	{
		name: 'Stone Wall',
		shortcut: ['0:1', '2:1'],
		icon: wall,
		type: 'fortified',
		age: 'II',
		group: 'JAPANESE'
	},
	{
		name: 'Stone Gate',
		shortcut: ['0:1', '2:2'],
		icon: stoneGate,
		type: 'fortified',
		age: 'II',
		group: 'JAPANESE'
	},
	{
		name: 'Shinto Shrine', nameZh: '神社',
		shortcut: ['0:2', '0:0'],
		icon: shintoShrine,
		type: 'economic',
		age: 'III',
		group: 'JAPANESE'
	},
	{
		name: 'University',
		shortcut: ['0:3', '0:0'],
		icon: university,
		type: 'research',
		age: 'IV',
		group: 'JAPANESE'
	},
	{
		name: 'Castle',
		shortcut: ['0:3', '1:0'],
		icon: keep,
		type: 'fortified',
		age: 'IV',
		group: 'JAPANESE'
	},
	/**
	 * Byzantine-specific
	 */
	{
		name: 'House',
		shortcut: ['0:0', '0:0'],
		icon: house,
		type: 'economic',
		age: 'I',
		group: 'BYZANTINES'
	},
	{
		name: 'Mill',
		shortcut: ['0:0', '0:1'],
		icon: mill,
		type: 'economic',
		age: 'I',
		group: 'BYZANTINES'
	},
	{
		name: 'Lumber Camp',
		shortcut: ['0:0', '0:2'],
		icon: lc,
		type: 'economic',
		age: 'I',
		group: 'BYZANTINES'
	},
	{
		name: 'Mining Camp',
		shortcut: ['0:0', '0:3'],
		icon: mc,
		type: 'economic',
		age: 'I',
		group: 'BYZANTINES'
	},
	{
		name: 'Olive Grove',
		shortcut: ['0:0', '1:0'],
		icon: oliveGrove,
		type: 'economic',
		age: 'I',
		group: 'BYZANTINES'
	},
	{
		name: 'Cistern',
		shortcut: ['0:0', '1:3'],
		icon: cistern,
		type: 'economic',
		age: 'I',
		group: 'BYZANTINES'
	},
	{
		name: 'Outpost',
		shortcut: ['0:0', '2:0'],
		icon: outpost,
		type: 'fortified',
		age: 'I',
		group: 'BYZANTINES'
	},
	{
		name: 'Palisade Wall',
		shortcut: ['0:0', '2:1'],
		icon: palisade,
		type: 'fortified',
		age: 'I',
		group: 'BYZANTINES'
	},
	{
		name: 'Palisade Gate',
		shortcut: ['0:0', '2:2'],
		icon: palisadeGate,
		type: 'fortified',
		age: 'I',
		group: 'BYZANTINES'
	},
	{
		name: 'Aqueduct',
		shortcut: ['0:0', '2:3'],
		icon: aqueduct,
		type: 'economic',
		age: 'I',
		group: 'BYZANTINES'
	},
	{
		name: 'Stable',
		shortcut: ['0:1', '1:1'],
		icon: stable,
		type: 'military',
		age: 'II',
		group: 'BYZANTINES'
	},
	{
		name: 'Mercenary House',
		shortcut: ['0:1', '1:2'],
		icon: mercenaryHouse,
		type: 'military',
		age: 'II',
		group: 'BYZANTINES'
	},
	{
		name: 'Stone Tower',
		shortcut: ['0:1', '2:0'],
		icon: tower,
		type: 'fortified',
		age: 'II',
		group: 'BYZANTINES'
	},
	{
		name: 'Stone Wall',
		shortcut: ['0:1', '2:1'],
		icon: wall,
		type: 'fortified',
		age: 'II',
		group: 'BYZANTINES'
	},
	{
		name: 'Stone Gate',
		shortcut: ['0:1', '2:2'],
		icon: stoneGate,
		type: 'fortified',
		age: 'II',
		group: 'BYZANTINES'
	},
	{
		name: 'Monastery',
		shortcut: ['0:2', '0:0'],
		icon: monastery,
		type: 'economic',
		age: 'III',
		group: 'BYZANTINES'
	},
	{
		name: 'Keep',
		shortcut: ['0:2', '2:0'],
		icon: keep,
		type: 'fortified',
		age: 'III',
		group: 'BYZANTINES'
	},
	{
		name: 'University',
		shortcut: ['0:3', '0:0'],
		icon: university,
		type: 'research',
		age: 'IV',
		group: 'BYZANTINES'
	},
]

const civilizationVariants = [
	{ group: 'SENGOKU', source: 'JAPANESE', exclude: ['Blacksmith', 'Market'] },
	{ group: 'TEMPLAR', source: 'GENERIC', exclude: ['Lumber Camp', 'Keep'] },
	{ group: 'LANCASTER', source: 'GENERIC' },
	{ group: 'GOLDEN_HORDE', source: 'MONGOL', exclude: ['Ovoo', 'Ger', 'Pasture', 'Monastery', 'Outpost', 'Palisade Wall', 'Palisade Gate'] },
	{ group: 'TUGHLAQ', source: 'DELHI', exclude: ['Mill', 'Lumber Camp', 'Mining Camp', 'Keep', 'University', 'Mosque'] },
	{ group: 'MACEDONIAN', source: 'GENERIC', exclude: ['Keep', 'University'] },
	{ group: 'JIN', source: 'GENERIC', exclude: ['Keep', 'Archery Range', 'Stable'] }
]

civilizationVariants.forEach(({ group, source, exclude = [] }) => {
	const inheritedBuildings = buildings
		.filter((building) => building.group === source && !exclude.includes(building.name))
		.map((building) => ({ ...building, group }))
	buildings.push(...inheritedBuildings)
})

const variantBuildings = [
	{
		name: 'Matsuri', nameZh: '祭典', shortcut: ['0:0', '0:1'], icon: matsuri,
		type: 'economic', age: 'I', group: 'SENGOKU'
	},
	{
		name: 'Hojo Clan Daimyo Estate', nameZh: '北条氏族大名府邸', shortcut: ['0:1', '0:3'], icon: hojoEstate,
		type: 'military', age: 'II', group: 'SENGOKU'
	},
	{
		name: 'Oda Clan Daimyo Estate', nameZh: '织田氏族大名府邸', shortcut: ['0:1', '1:3'], icon: odaEstate,
		type: 'military', age: 'II', group: 'SENGOKU'
	},
	{
		name: 'Takeda Clan Daimyo Estate', nameZh: '武田氏族大名府邸', shortcut: ['0:1', '2:3'], icon: takedaEstate,
		type: 'military', age: 'II', group: 'SENGOKU'
	},
	{
		name: 'Buddhist Temple', nameZh: '佛寺', shortcut: ['0:2', '0:0'], icon: buddhistTemple,
		type: 'research', age: 'III', group: 'SENGOKU'
	},
	{
		name: 'Templar Keep', nameZh: '要塞', shortcut: ['0:1', '1:2'], icon: templarKeep,
		type: 'fortified', age: 'II', group: 'TEMPLAR'
	},
	{
		name: 'Manor', nameZh: '庄园', shortcut: ['0:1', '1:2'], icon: manor,
		type: 'economic', age: 'II', group: 'LANCASTER'
	},
	{
		name: 'Ger', nameZh: '蒙古包', shortcut: ['0:0', '0:1'], icon: ger,
		type: 'economic', age: 'I', group: 'GOLDEN_HORDE'
	},
	{
		name: 'Stockyard', nameZh: '牲畜围栏', shortcut: ['0:0', '1:0'], icon: stockyard,
		type: 'economic', age: 'I', group: 'GOLDEN_HORDE'
	},
	{
		name: 'Ovoo', nameZh: '敖包', shortcut: ['0:0', '0:0'], icon: ovooGoldenHorde,
		type: 'economic', age: 'I', group: 'GOLDEN_HORDE'
	},
	{
		name: 'Palisade Wall', nameZh: '木栅栏', shortcut: ['0:0', '2:1'], icon: palisade,
		type: 'fortified', age: 'I', group: 'GOLDEN_HORDE'
	},
	{
		name: 'Palisade Gate', nameZh: '木门', shortcut: ['0:0', '2:2'], icon: palisadeGate,
		type: 'fortified', age: 'I', group: 'GOLDEN_HORDE'
	},
	{
		name: 'Fortified Outpost', nameZh: '设防哨站', shortcut: ['0:0', '2:0'], icon: fortifiedOutpost,
		type: 'fortified', age: 'I', group: 'GOLDEN_HORDE'
	},
	{
		name: 'Prayer Tent', nameZh: '祈祷帐篷', shortcut: ['0:2', '0:0'], icon: prayerTent,
		type: 'research', age: 'III', group: 'GOLDEN_HORDE'
	},
	{
		name: 'Worker Elephant', nameZh: '工作大象', shortcut: ['0:0', '0:1'], icon: workerElephant,
		type: 'economic', age: 'I', group: 'TUGHLAQ'
	},
	{
		name: 'Mosque', nameZh: '清真寺', shortcut: ['0:2', '0:0'], icon: mosque,
		type: 'economic', age: 'III', group: 'TUGHLAQ'
	},
	{
		name: 'Tughlaqabad Fort', nameZh: '腾格拉卡巴德堡垒', shortcut: ['0:1', '1:2'], icon: tughlaqabadFort,
		type: 'fortified', age: 'II', group: 'TUGHLAQ'
	},
	{
		name: 'Madrasa', nameZh: '学苑', shortcut: ['0:3', '0:0'], icon: madrasa,
		type: 'research', age: 'IV', group: 'TUGHLAQ'
	},
	{
		name: 'Varangian Stronghold', nameZh: '瓦兰吉堡垒', shortcut: ['0:0', '1:1'], icon: varangianStronghold,
		type: 'military', age: 'I', group: 'MACEDONIAN'
	},
	{
		name: 'Varangian Warcamp', nameZh: '瓦兰吉军营', shortcut: ['0:0', '1:3'], icon: varangianWarcamp,
		type: 'military', age: 'I', group: 'MACEDONIAN'
	},
	{
		name: 'Varangian Arsenal', nameZh: '瓦兰吉兵工厂', shortcut: ['0:1', '0:0'], icon: varangianArsenal,
		type: 'research', age: 'II', group: 'MACEDONIAN'
	},
	{
		name: 'Keep', nameZh: '城堡', shortcut: ['0:2', '2:0'], icon: keep,
		type: 'fortified', age: 'III', group: 'MACEDONIAN'
	},
	{
		name: 'Grassland', nameZh: '草原', shortcut: ['0:1', '1:2'], icon: grassland,
		type: 'economic', age: 'II', group: 'JIN'
	},
	{
		name: 'Machine Workshop', nameZh: '机械车间', shortcut: ['0:1', '1:0'], icon: machineWorkshop,
		type: 'military', age: 'II', group: 'JIN'
	},
	{
		name: 'War Stable', nameZh: '战争马厩', shortcut: ['0:1', '1:1'], icon: warStable,
		type: 'military', age: 'II', group: 'JIN'
	},
	{
		name: 'Keep', nameZh: '城堡', shortcut: ['0:2', '2:0'], icon: keep,
		type: 'fortified', age: 'III', group: 'JIN'
	}
]

variantBuildings.forEach((building) => {
	const existingIndex = buildings.findIndex((entry) =>
		entry.group === building.group &&
		entry.shortcut[0] === building.shortcut[0] &&
		entry.shortcut[1] === building.shortcut[1]
	)
	if (existingIndex === -1) buildings.push(building)
	else buildings[existingIndex] = building
})

export default buildings
