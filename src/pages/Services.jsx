import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Truck, 
  Users, 
  FileText, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Shield,
  Target
} from 'lucide-react';
import Container from '../components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Commerce International',
      subtitle: 'Votre passeport pour les marchés mondiaux',
      description: 'Des solutions complètes pour développer vos activités commerciales à l\'international avec expertise et sécurité.',
      features: [
        'Négociation et conclusion de contrats internationaux',
        'Analyse de marché et identification d\'opportunités',
        'Gestion des formalités douanières et réglementaires',
        'Optimisation fiscale des opérations internationales',
        'Support juridique et compliance internationale',
        'Formation aux pratiques commerciales locales'
      ],
      benefits: [
        'Accès facilité aux marchés internationaux',
        'Réduction des risques commerciaux',
        'Optimisation des coûts de transaction',
        'Accompagnement personnalisé'
      ],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50'
    },
    {
      icon: Truck,
      title: 'Logistique & Transport',
      subtitle: 'Votre chaîne d\'approvisionnement optimisée',
      description: 'Solutions logistiques intégrées pour un transport sécurisé et efficace de vos marchandises vers toutes les destinations.',
      features: [
        'Transport multimodal (maritime, aérien, terrestre)',
        'Entreposage et gestion des stocks',
        'Emballage et conditionnement spécialisés',
        'Traçabilité en temps réel des expéditions',
        'Assurance cargo et gestion des sinistres',
        'Services de distribution last-mile'
      ],
      benefits: [
        'Délais de livraison optimisés',
        'Coûts de transport réduits',
        'Sécurité maximale des marchandises',
        'Visibilité complète des opérations'
      ],
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-50'
    },
    {
      icon: Users,
      title: 'Conseil & Accompagnement',
      subtitle: 'Votre partenaire stratégique pour l\'international',
      description: 'Expertise conseil pour développer votre stratégie internationale et maximiser vos opportunités de croissance.',
      features: [
        'Audit et diagnostic de votre potentiel export',
        'Élaboration de stratégies d\'internationalisation',
        'Recherche et sélection de partenaires commerciaux',
        'Due diligence et évaluation des risques',
        'Formation des équipes aux enjeux internationaux',
        'Support dans les négociations complexes'
      ],
      benefits: [
        'Stratégie sur mesure adaptée à vos objectifs',
        'Expertise sectorielle approfondie',
        'Réseau international de partenaires',
        'ROI optimisé sur vos investissements'
      ],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50'
    },
    {
      icon: FileText,
      title: 'Gestion Documentaire',
      subtitle: 'Conformité et sécurité garanties',
      description: 'Gestion complète de vos formalités administratives pour assurer la conformité de toutes vos opérations internationales.',
      features: [
        'Préparation et vérification des documents commerciaux',
        'Gestion des licences d\'import/export',
        'Certification et légalisation consulaire',
        'Documentation douanière et fiscale',
        'Archivage sécurisé et traçabil